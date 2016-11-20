import axios from 'axios';

export default {
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    Accept: 'application/json',
  },

  get(url, params) {
    return this.request('get', url, { data: params });
  },

  post(url, params) {
    return this.request('post', url, { data: params });
  },

  put(url, params) {
    return this.request('put', url, { data: params });
  },

  delete(url) {
    return this.request('delete', url);
  },

  request(requestMethod, url, params) {
    const options = Object.assign({}, {
      method: requestMethod,
      url,
      baseURL: this.baseURL,
      headers: this.headers,
      responseType: 'json',
    }, params);
    return axios(options);
  },
};
