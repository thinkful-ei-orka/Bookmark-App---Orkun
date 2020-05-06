// Generate functions go here. 



//GenerateInitial View

//Generate


function generateInitialView(bookmarks) {
    return `
    <section class="top-buttons">
    <button class="new-bookmark"
    type="button">
+ New 
</button>
<select class = "stars">
  <option value="" selected disabled hidden>Minimum Rating</option>
  <option value = "5">☆☆☆☆☆</option>
  <option value = "4">☆☆☆☆</option>
  <option value = "3">☆☆☆</option>
  <option value = "2">☆☆</option>
  <option value = "1">☆</option>
</select>
</section>



`
}

function generateAddBookmark() {
    return `
    <form class="add-bookmark-form">
      <fieldset class="input-info">
        <legend>Add a Bookmark</legend>
        <label for="bookmark-title">Pick a title</label>
        <input type="text" name="bookmark-inputs" id="bookmark-title" placeholder="Title...  " required>
        <label for="bookmark-url">Enter a URL</label>
        <input type="url" name="bookmark-inputs" id="bookmark-url" placeholder="https://www.youtube.com/.." required>
        <label for="bookmark-desc">Description</label>
        <textarea id="bookmark-desc" cols="39" rows="5" placeholder="Enter a brief description..." style="resize:none" required></textarea>
      </fieldset>
      <fieldset class="star-rating">       
        <input type="radio" id="five-stars" name="stars" value="5">
        <label class="half" for="five-stars">5</label>
        <input type="radio" id="four-stars" name="stars" value="4">
        <label class="half" for="four-stars">4</label>
        <input type="radio" id="three-stars" name="stars" value="3" checked="checked" required>
        <label class="half" for="three-stars">3</label>
        <input type="radio" id="two-stars" name="stars" value="2">
        <label class="half" for="two-stars">2</label>
        <input type="radio" id="one-star" name="stars" value="1">
        <label class="half" for="one-star">1</label>
      </fieldset>
      <button class="add-bookmark-form-btn">
        <span>Create Bookmark</span>
      </button>
    </form>
 `
}


const generateStarRating = [
    '<span>★</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>',
    '<span>★</span><span>★</span><span>☆</span><span>☆</span><span>☆</span>',
    '<span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>',
    '<span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>',
    '<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>',
  ]

  const generateShrunkBookmarkItem = (bookmark) => {
    // console.log(bookmark.id)
    return `
<ul class = "bookmark-shrunk-list">
<li class="bookmark-item collapsed-list" data-item-id="${bookmark.id}">
      <h2 class="bookmark-title">${bookmark.title}</h2>
      <div class="bookmark-rating">
        ${generateStarRating[bookmark.rating - 1]}
      </div>
      <a href="#" class="delete-bookmark-btn"><span><i class="fas fa-trash-alt"></i></span></a>
    </li>
</ul>`
    
  };


  const generateExpandedBookmarkItem = function(bookmark) {
    // console.log(bookmark.id)
    return `
    <ul class ="bookmark-expanded-list">
    <li class="bookmark-item expanded-list" data-item-id="${bookmark.id}">
      <h2 class="bookmark-title">${bookmark.title}</h2>
      <p class="bookmark-desc">
        ${bookmark.desc}
      </p>
      <a href="${bookmark.url}" target="_blank" class="visit-site-btn">Visit site</a>
      <div class="bookmark-rating">
        ${generateStarRating[bookmark.rating - 1]}
      </div>
      <a href="#" class="delete-bookmark-btn"><span><i class="fas fa-trash-alt"></i></span></a>
    </li>
    </ul>`
  };


  function generateBookmarkString(bookmarkItem) {
    const items = bookmarkItem.map(item => {
        if(!item.expanded) {
           return generateShrunkBookmarkItem(item)
        }
        else {
          return generateExpandedBookmarkItem(item)
        }
    })
    return items.join('');
    
  }


export default {
    generateInitialView,
    generateShrunkBookmarkItem,
    generateExpandedBookmarkItem,
    generateBookmarkString,
    generateAddBookmark
}