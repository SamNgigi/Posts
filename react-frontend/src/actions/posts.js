export const addPost = content => {
  return {
    type: 'ADD_POST',
    content
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
