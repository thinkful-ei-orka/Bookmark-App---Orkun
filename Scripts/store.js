

// add to the bookmarks following items:
// id: 'x56w',
// title: 'Title 1',
// rating: 3,
// url: 'http://www.title1.com',
// description: 'lorem ipsum dolor sit',
// expanded: false


const bookmarks = []
let adding = false;
let error = null;
let filter = 0;
let added = false;

const findById = function (id) {
  return this.bookmarks.find(currentItem => currentItem.id === id)
}


const addBookmark = function (item) {
  // item.expanded = false;
  this.bookmarks.push(item)
}

const deleteBookmark = function(id) {
  this.bookmarks = this.bookmarks.filter(currentItem => currentItem.id !== id);
}

const findAndUpdate = function(id, newData) {
  let foundItem = this.findById(id);
  Object.assign(foundItem, newData)
}

function filterList(rating) {
  this.filter = rating;
  let filteredItems = this.bookmarks.filter(item => item.rating >= this.filter);
  return filteredItems;
};

function toggleviews(bookmarkItem) {
  bookmarkItem.expanded = !bookmarkItem.expanded;
}



export default {
  bookmarks,
  adding,
  error,
  filter,
  added,
  findById,
  addBookmark,
  deleteBookmark,
  findAndUpdate,
  filterList,
  toggleviews
}
