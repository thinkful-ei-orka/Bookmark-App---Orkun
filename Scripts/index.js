// This is the module that runs all of my functions in my app

import api from './api.js';
import handlers from './handlers.js'
import store from './store.js'


function main() {
    api.getItems()
    .then(items => { 
        items.forEach(item => store.addBookmark(item));
        handlers.render();
    })
    .catch((error) => {
        store.setError(error.message);
        handlers.render()
    })
    handlers.eventHandlers();
    handlers.render()
}


$(main)


