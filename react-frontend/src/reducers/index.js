import { combineReducers } from 'redux';
import posts from "./posts";

const postApp = combineReducers({
  posts,
})

export default postApp
