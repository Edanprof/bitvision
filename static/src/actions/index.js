import axios from 'axios';

//News Actions
export const FETCH_POSTS = 'fetch_posts'; // fetch news

//User Acitons
export const CREATE_USER = 'create_user'; // Creaet user id(email, password)
export const FETCH_USER = 'fetch_user'; // Fetch User information(email, personal wallet)
export const UPDATE_USER = 'update_user'; // Update user information(password,2-factor?, )
export const DELETE_USER = 'delete_user'; // Request for delete user id

//Investment Actions

//Room Actions

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
