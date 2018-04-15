const initialState = [
  {text:"Initial test post."}
];

export default function posts(state=initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
