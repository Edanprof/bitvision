import axios from 'axios';

//News Actions
export const FETCH_POSTS = 'fetch_posts'; // fetch news
export const POS_POST = 'pos_post'; // vote plus on news
export const NEG_POST = 'neg_post'; // vote minus on news

//User Acitons
export const CREATE_USER = 'create_user'; // Create user id(email, password)
export const FETCH_USER = 'fetch_user'; // Fetch User information(email, personal wallet)
export const UPDATE_USER = 'update_user'; // Update user information(password,2-factor?, )
export const DELETE_USER = 'delete_user'; // Request for delete user id

//Investment Actions
export const CREATE_VISION = 'make_vision'; // Create vision for room
export const FETCH_VISION = 'fetch_vision'; // Fetch user's vision detail(vision_id, )
export const FETCH_VISIONS = 'fetch_visions'; // Fetch list of vision in user's vision history
export const DELETE_VISION = 'delete_vision'; // Cancel vision for room

//Login Actions
export const LOGIN_USER = 'login_user'; // user login action
export const LOGOUT_USER = 'logout_user'; // user logout actions



//Etc actions

const ROOT_URL = 'API_SERVER_domain/api';
const API_KEY = '?key=new123';


//News Actions
export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type: FETCH_POSTS,
    payload: request
  };
}

//User Actions
export function createUser(){
  const request = axios.post(`${ROOT_URL}/user/${API_KEY}`).then(()=>callback());
  return{
    type: CREATE_USER,
    payload: request
  };
}

export function updateUser(){
  const request = axios.put(`${ROOT_URL}/user/${API_KEY}`).then(()=>callback());
  return{
    type: UPDATE_USER,
    payload: request
  };
}

export function deleteUser(){
  const request = axios.delete(`${ROOT_URL}/user/${id}${API_KEY}`).then(()=>callback());
  return{
    type: DELETE_USER,
    payload: request
  };
}

export function fetchUser(){
  const request = axios.get(`${ROOT_URL}/user/${id}${API_KEY}`).then();
  return{
    type: FETCH_USER,
    payload : request
  };
}
