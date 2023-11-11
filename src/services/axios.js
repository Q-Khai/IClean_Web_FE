import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://iclean.azurewebsites.net/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});