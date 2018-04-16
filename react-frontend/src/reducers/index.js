import { combineReducers } from 'redux';
import posts from "./posts";
import auth from "./auth"

const postApp = combineReducers({
  posts, auth,
})

export default postApp
