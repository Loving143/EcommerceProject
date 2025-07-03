import axios from 'axios';

const BASE_URL = 'http://localhost:8060';

export const SignupUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const LoginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProducts = async (type = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/product/fetch/products/popular`, {
      params: type ? { type } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw to handle it in the component if needed
  }
};