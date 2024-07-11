import axios from 'axios';

const BASE_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchUserData = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

const updateUserProfile = async (userId, userData) => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    return null;
  }
};

export { fetchUserData, updateUserProfile };