import { posts } from '@/api';

function fetchPosts() {
  return posts.get('/');
}
function createPosts(postData) {
  return posts.post('/', postData);
}
function deletePost(postId) {
  return posts.delete(postId);
}
export { fetchPosts, createPosts, deletePost };
