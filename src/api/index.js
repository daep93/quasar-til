import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_SERVER_API_URL,
  });
  return setInterceptors(instance);
}
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_SERVER_API_URL}${url}`,
  });
  return instance;
}

const instance = createInstance();
const posts = createInstanceWithAuth('posts');
export { instance, posts };
