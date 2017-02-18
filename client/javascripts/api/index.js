// @flow
import axios from 'axios';
import authenticityToken from './authenticityToken';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config: Object) => {
    config.headers['X-CSRF-TOKEN'] = authenticityToken();  // eslint-disable-line
    return config;
  },
  error => Promise.reject(error),
);

function get(url: string) {
  return axios.get(url).then(response => response.data);
}

function sendDelete(url: string) {
  return axios.delete(url).then(response => response.data);
}

function sendPatch(url: string, data: Object) {
  return axios.patch(url, data).then(response => response.data);
}

function sendPost(url: string, data: Object) {
  return axios.post(url, data).then(response => response.data);
}

export function signOut() {
  return sendDelete('/api/sessions');
}

export function createDiaryEntry({ title, body }: { title: string, body: string}) {
  return sendPost('/api/diary_entries', { diary_entry: { title, body } });
}

export function fetchDiaryEntries() {
  return get('/api/diary_entries');
}
