import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://iclean.azurewebsites.net',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});