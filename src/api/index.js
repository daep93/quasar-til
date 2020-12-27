import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_SERVER_API_URL,
  });
  return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(userData) {
  return instance.post('signup', userData);
}
function loginUser(userData) {
  return instance.post('login', userData);
}
function fetchPosts() {
  return instance.get('posts');
}
function createPosts(postData) {
  return instance.post('posts', postData);
}
export { registerUser, loginUser, fetchPosts, createPosts };
