import api from './api';

export const listOfPhones = () =>
  api.get('/phones').then((response) => response.data);

export const loadSinglePhone = (id) =>
  api.get(`/phones/${id}`).then((response) => response.data);
