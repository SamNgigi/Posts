export const fetchPosts = () =>{
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch("/api/posts/", {headers, })
    .then(response => response.json())
    .then(posts => {
      return dispatch({
        type: 'FETCH_POSTS',
        posts
      })
    })
  }
}

export const addPost = content => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({content, });
    return fetch("/api/posts/", {headers, method: "POST", body})
    .then(response => response.json())
    .then(post => {
      return dispatch({
        type: 'ADD_POST',
        post
      })
    })
  }
}

export const updatePost = (id, content) => {
  return {
    type: 'UPDATE_POST',
    id,
    content
  }
}

export const deletePost = id => {
  return {
    type: 'DELETE_POST',
    id
  }
}
