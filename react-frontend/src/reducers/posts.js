// We empty our initialState list/array
// {content:"Initial test post."}
const initialState = [];

export default function posts(state=initialState, action) {

  let postList = state.slice()

  switch (action.type) {

    case 'FETCH_POSTS':
      return[...state, ...action.posts]

    case 'ADD_POST':
      return [...state, {content: action.content}];

    case 'UPDATE_POST':
      let postToUpdate = postList[action.id]
      postToUpdate.content = action.content;
      postList.splice(action.id, 1, postToUpdate)
      return postList

    case 'DELETE_POST':
      postList.splice(action.id, 1);
      return postList

    default:
      return state;
  }
}
