import qs from 'qs';
import request from '../utils/request';

export async function query(page) {
  return request(`/api/article?_page=${page}&_limit=10`);
}

export async function remove(id) {
  return request(`/api/article/${id}`, {
    method: 'DELETE',
  });
}

export async function create(values) {
  return request('/api/article', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
