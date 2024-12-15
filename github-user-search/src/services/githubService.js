import axios from 'axios';

const GITHUB_API_BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL || 'https://api.github.com';

export const githubService = {
  async searchUsers(params) {
    const { 
      query, 
      location = '', 
      minRepositories = 0 
    } = params;

    let searchQuery = query;
    if (location) {
      searchQuery += ` location:${location}`;
    }
    if (minRepositories > 0) {
      searchQuery += ` repos:>=${minRepositories}`;
    }

    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
        params: { 
          q: searchQuery,
          per_page: 10
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching GitHub users:', error);
      throw error;
    }
  },

  async getUserDetails(username) {
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async fetchUserData(username) {
    // Adding the fetchUserData function as requested
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }
};
