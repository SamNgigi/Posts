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

export const updatePost = (index, content) => {

  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({content, });
    let postId = getState().posts[index].id;

    return fetch(`/api/posts/${postId}/`, {headers, method: "PUT", body})
    .then(response => response.json())
    .then(post => {
      return dispatch({
        type: 'UPDATE_POST',
        post,
        index
      })
    })
  }
}

export const deletePost = index => {

  return (dispatch, getState) =>{
    let headers = {"Content-Type": "application/json"};
    let postId = getState().posts[index].id;

    return fetch(`/api/posts/${postId}/`, {headers, method: "DELETE"})
    .then(response =>{
      if (response.ok) {
        return dispatch({
          type: 'DELETE_POST',
          index
        })
      }
    })
  }
}
