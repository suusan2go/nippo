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

function sendDelete(url: string) {
  return axios.delete(url).then(response => response.data);
}

function sendPatch(url: string, data: Object) {
  return axios.patch(url, data).then(response => response.data);
}

function sendPost(url: string, data: Object) {
  return axios.post(url, data).then(response => response.data);
}

export function createDiaryEntry({ title, body }: { title: string, body: string}) {
  return sendPost('/api/diary_entries', { diary_entry: { title, body } });
}

export function updateDiaryEntry({ diaryId, title, body }: { diaryId: number, title: string, body: string }) {
  return sendPatch(`/api/diary_entries/${diaryId}`, { title, body });
}
