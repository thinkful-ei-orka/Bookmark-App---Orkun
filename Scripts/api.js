let BASE_URL = 'https://thinkful-list-api.herokuapp.com/orkun'


function listApiFetch(...args) {
    let error = false;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      })
  }



function getItems() {
    return listApiFetch(`${BASE_URL}/bookmarks`)
}

function createBookmark(title, url, desc, rating) {
    const stringBody = JSON.stringify({title, url, desc, rating});
    let newArg = {
        method : 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: stringBody
    }
    return listApiFetch(`${BASE_URL}/bookmarks`, newArg)
}



function deleteBookmark(id) {
    return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
        method: "DELETE"
    })
}



export default {
    getItems,
    createBookmark,
    deleteBookmark,
}