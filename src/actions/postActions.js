import { FETCH_POSTS, FETCH_POST_SUCCESS, ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILED } from './constants';

export const addPostSuccess = newPost => ({
  type: ADD_POST_SUCCESS,
  payload: newPost,
});

export const addPostFailed = newPost => ({
  type: ADD_POST_FAILED,
  payload: newPost,
});

export const addPost = newPost =>  ({
  type: ADD_POST,
  payload: newPost,
});

// export const addPost = newPost => (dispatch) => {
//   newPost.createdAt = new Date().toISOString();
//   fetch('http://localhost:1234/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newPost),
//   })
//     .then(res => res.json())
//     .then(data => dispatch(addPostSuccess(newPost)))
//     .catch(err => console.log(err));
// };

export const fetchPostsSuccess = newUser => ({
  type: FETCH_POST_SUCCESS,
  payload: newUser,
});

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

// export const fetchPosts = () => (dispatch) => {
//   fetch('http://localhost:1234/api/posts')
//     .then(res => res.json())
//     .then(data => dispatch(fetchPostsSuccess(data)));
// };
