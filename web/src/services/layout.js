import qs from 'qs';
import request from '../utils/request';

export async function login(params) {
  return request(`/api/login?${qs.stringify(params)}`);
}

export async function logout() {
  return request('/api/logout');
}
