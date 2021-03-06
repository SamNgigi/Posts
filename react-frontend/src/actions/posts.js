export const fetchPosts = () => {
  return(dispatch, getState) => {
    let headers = {
      "Content-Type": "application/json"
    };
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    return fetch("/api/posts/", {headers}).then(res => {
      if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        console.log("Server Error!");
        throw res;
      }
    }).then(res => {
      if (res.status === 200) {
        return dispatch({type: 'FETCH_POSTS', posts: res.data});
      } else if (res.status === 401 || res.status === 403) {
        dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
        throw res.data;
      }
    })
  }
}

export const addPost = content => {
  return(dispatch, getState) => {
    let headers = {
      "Content-Type": "application/json"
    };
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    let body = JSON.stringify({content});
    return fetch("/api/posts/", {
      headers,
      method: "POST",
      body
    }).then(res => {
      if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        console.log("Server Error!");
        throw res;
      }
    }).then(res => {
      if (res.status === 201) {
        return dispatch({type: 'ADD_NOTE', note: res.data});
      } else if (res.status === 401 || res.status === 403) {
        dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
        throw res.data;
      }
    })
  }
}

export const updatePost = (index, content) => {
  return(dispatch, getState) => {

    let headers = {
      "Content-Type": "application/json"
    };
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    let body = JSON.stringify({content});
    let noteId = getState().posts[index].id;

    return fetch(`/api/posts/${noteId}/`, {
      headers,
      method: "PUT",
      body
    }).then(res => {
      if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        console.log("Server Error!");
        throw res;
      }
    }).then(res => {
      if (res.status === 200) {
        return dispatch({type: 'UPDATE_NOTE', note: res.data, index});
      } else if (res.status === 401 || res.status === 403) {
        dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
        throw res.data;
      }
    })
  }
}

export const deletePost = index => {
  return(dispatch, getState) => {

    let headers = {
      "Content-Type": "application/json"
    };
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    let noteId = getState().posts[index].id;

    return fetch(`/api/posts/${noteId}/`, {headers, method: "DELETE"}).then(res => {
      if (res.status === 204) {
        return {status: res.status, data: {}};
      } else if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        console.log("Server Error!");
        throw res;
      }
    }).then(res => {
      if (res.status === 204) {
        return dispatch({type: 'DELETE_NOTE', index});
      } else if (res.status === 401 || res.status === 403) {
        dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
        throw res.data;
      }
    })
  }
}
