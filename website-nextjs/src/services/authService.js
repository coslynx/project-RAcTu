import axios from 'axios';

const BASE_URL = 'https://api.example.com';

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { username, password });
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Login failed. Please try again.');
    }
  },

  logout: async () => {
    try {
      const response = await axios.post(`${BASE_URL}/logout`);
      return response.data;
    } catch (error) {
      console.error('Error logging out:', error);
      throw new Error('Logout failed. Please try again.');
    }
  },

  getUserInfo: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw new Error('Failed to fetch user info.');
    }
  },

  updateUserProfile: async (userData) => {
    try {
      const response = await axios.put(`${BASE_URL}/user`, userData);
      return response.data;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw new Error('Failed to update user profile.');
    }
  }
};

export default authService;