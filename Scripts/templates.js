// Generate functions go here. 

//GenerateInitial View

//Generate


function generateInitialView() {
    return `
    <section class="top-buttons">
    <button class="new-bookmark"
    type="button">
+ New 
</button>
<select id = "stars">
  <option value="" selected disabled hidden>Minimum Rating</option>
  <option value = "5">☆☆☆☆☆</option>
  <option value = "4">☆☆☆☆</option>
  <option value = "3">☆☆☆</option>
  <option value = "2">☆☆</option>
  <option value = "1">☆</option>
</select>
</section>`
}

function generateAddBookmark() {
    return `
    <form class="add-bookmark-form">
      <fieldset class="input-info">
        <legend>Add a Bookmark</legend>
        <label for="bookmark-title">Pick a title</label>
        <input type="text" name="bookmark-inputs" id="bookmark-title" placeholder="type here...  " required>
        <label for="bookmark-url">Enter a URL</label>
        <input type="url" name="bookmark-inputs" id="bookmark-url" placeholder="include 'https' protocol" required>
        <label for="bookmark-desc">Enter a description</label>
        <textarea id="bookmark-desc" cols="39" rows="5" placeholder="Enter a brief description..." style="resize:none"></textarea>
      </fieldset>
      <fieldset class="star-rating">       
        <input type="radio" id="five-stars" name="stars" value="5">
        <label for="five-stars">5</label>
        <input type="radio" id="four-stars" name="stars" value="4">
        <label for="four-stars">4</label>
        <input type="radio" id="three-stars" name="stars" value="3" checked="checked" required>
        <label for="three-stars">3</label>
        <input type="radio" id="two-stars" name="stars" value="2">
        <label for="two-stars">2</label>
        <input type="radio" id="one-star" name="stars" value="1">
        <label for="one-star">1</label>
      </fieldset>
      <button class="add-bookmark-form-btn">
        <span>Add Bookmark</span>
      </button>
    </form>
 `
}

function generateBookmark(bookmarks) {
    if (!bookmarks.expanded) {
      return `
          <section class="bookmark-links" data-item-id="${bookmarks.id}">
            <button class="bookmark-links-btn">${bookmarks.title}</button
            ><span class="star-rating">${bookmarks.rating}</span><button type='submit' class='delete-bookmark'>Delete</button>
          </section>`;
    } else {
      return `
    <section class="bookmark-links-expanded" data-item-id="${bookmarks.id}">${bookmarks.title}
    <span for="star-rating-expaned">${bookmarks.rating}</span>
    <button type='submit' class='delete-bookmark'>Delete</button>
    <p class="description-expanded">${bookmarks.desc}</p>
    <a href="${bookmarks.url}">Visit Site</a></section>`;
    }
  }

  function generateBookmarkString(bookmarkItem) {
    const items = bookmarkItem.map(item => generateBookmark(item));
    return items.join('');
  }



export default {
    generateInitialView,
    generateBookmark,
    generateBookmarkString,
    generateAddBookmark
}