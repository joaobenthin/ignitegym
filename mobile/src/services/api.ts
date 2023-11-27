import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

api.interceptors.response.use(
  response => {
    console.log('INTERCEPTOR RESPONSE =>', response);

    return response;
  },
  error => {
    console.log('INTERCEPTOR RESPONSE =>', error);
    return Promise.reject(error);
  },
);

export { api };
