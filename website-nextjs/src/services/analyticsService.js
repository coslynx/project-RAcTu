import axios from 'axios';

const analyticsService = {
  trackUserBehavior: (userId, action) => {
    try {
      // Code to track user behavior using Google Analytics API
      const data = {
        userId,
        action,
      };
      axios.post('https://www.google-analytics.com/track', data);
    } catch (error) {
      console.error('Error tracking user behavior:', error);
    }
  },
};

export default analyticsService;