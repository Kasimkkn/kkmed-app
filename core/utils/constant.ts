import axios from 'axios';

export const HttpMethod = {
  GET: axios.get,
  POST: axios.post,
  PUT: axios.put,
  PATCH: axios.patch,
  DELETE: axios.delete,
};
