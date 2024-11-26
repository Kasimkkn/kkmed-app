const API_URL = process.env.API_URL;

export const ENDPOINT = {
  Auth: {
    login: `${API_URL}/login`,
  },
  Home: {
    getProducts: `${API_URL}/products`,
  },
};
