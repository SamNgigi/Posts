export const loadUser = () => {
  return (dispatch, getState) => {
    dispatch({type: "USER_LOADING"});

    const token = getState().auth.token;

    let headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }
    return fetch("/api/auth/user/", {headers, })
      .then(response => {
        if (response.status < 500) {
          return response.json().then(data => {
            return {status: response.status, data};
          })
        } else {
          console.log("Server Error!");
          throw response;
        }
      })
      .then(response => {
        if (response.status === 200) {
          dispatch({type: 'USER_LOADED', user: response.data });
          return response.data;
        } else if (response.status >= 400 && response.status < 500) {
          dispatch({type: "AUTHENTICATION_ERROR", data: response.data});
          throw response.data;
        }
      })
  }
}

/*
  In the above action, we are sending an Authorization header with the token stored in the redux store.

  If this token exists and is correct, the API will return the user object, otherwise, we'll dispatch AUTHENTICATION_ERROR action.

  We include out auth action in the action index
*/

export const login = (username, password) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({username, password});

    return fetch("/api/auth/login/", {headers, body, method: "POST"})
      .then(response => {
        if (response.status < 500) {
          return response.json().then(data => {
            return {status: response.status, data};
          })
        } else {
          console.log("Server Error!");
          throw response;
        }
      })
      .then(response => {
        if (response.status === 200) {
          dispatch({type: 'LOGIN_SUCCESSFUL', data: response.data });
          return response.data;
        } else if (response.status === 403 || response.status === 401) {
          dispatch({type: "AUTHENTICATION_ERROR", data: response.data});
          throw response.data;
        } else {
          dispatch({type: "LOGIN_FAILED", data: response.data});
          throw response.data;
        }
      })
  }
}
