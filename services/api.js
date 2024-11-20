import axios from "axios";

const API_URL = "http://localhost:5000"; // Change to your backend URL

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
