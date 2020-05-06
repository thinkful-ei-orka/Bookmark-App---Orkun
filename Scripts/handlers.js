import store from './store.js';
import api from './api.js';
import templates from './templates.js';

const generateError = function (message) {
    return `
        <section class="error-content">
          <button id="cancel-error">X</button>
          <p>${message}</p>
        </section>
      `;
  };
  
  const renderError = function () {
    if (store.error) {
      const el = generateError(store.error);
      $('.error-container').html(el);
    } else {
      $('.error-container').empty();
    }
  };
  
  const handleCloseError = function () {
    $('.error-container').on('click', '#cancel-error', () => {
      store.setError(null);
      renderError();
    });
  };




const render = () => {
    renderError();
    let items = store.filterList(store.filter);
    let string = templates.generateInitialView();
    let adding = templates.generateAddBookmark();
    if(store.adding === false) {
        string += templates.generateBookmarkString(items);
     
    }
    else {
        
        string = templates.generateAddBookmark()
        
    }

    $('main').html(string);
   
}


const handleNewButton = () => {
    $('main').on('click', '.new-bookmark', event => {
        store.adding = true;
        render()
    })
}



const handleAddBookmark = () => {

    $('main').on('submit', '.add-bookmark-form', event => {
        event.preventDefault();
        const title = $('#bookmark-title').val();
        const url = $('#bookmark-url').val();
        const desc = $('#bookmark-desc').val();
        const rating = $("input[name='stars']:checked").val();
       
        api.createBookmark(title,url,desc,rating)
        .then((newItem) => {
            store.addBookmark(newItem)
            store.adding=false
            render()
        })
        .catch((error) => {
            store.setError(error.message);
            render()
        })

    })
}

const getItemIdFromElement = function(item) {
    return $(item)
      .closest(".bookmark-item")
      .data("item-id");
  };
  



const handleExpandedBookmarks = () => {
    $('main').on('click', '.bookmark-title', event => {
        let id = getItemIdFromElement(event.currentTarget)
        let selected = store.findById(id);
        store.toggleviews(selected)
        render()
    })
}

const handleDeleteBookmarks = () => {
    $('main').on('click', '.delete-bookmark-btn', event => {
        let id = getItemIdFromElement(event.currentTarget)
        api.deleteBookmark(id)
        .then(() => {
            store.deleteBookmark(id)
            render()
        })
        .catch((error) => {
            store.setError(error.message);
            render()
        })

       
    })
}

const handleFiltering = () => {
    $('main').on('change', 'select', event => {
        let value = event.currentTarget.value;
        store.filterList(value)
        render()
    })
}


const eventHandlers = () => {
    handleNewButton()
    handleAddBookmark()
    handleExpandedBookmarks()
    handleDeleteBookmarks()
    handleFiltering()
    handleCloseError()
}



export default {
eventHandlers,
render
 }