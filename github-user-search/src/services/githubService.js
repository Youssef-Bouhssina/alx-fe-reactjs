import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Authorization': `token ${import.meta.env.VITE_GITHUB_API_KEY}`
    }
});

export const fetchUserData = async (username) => {
    try {
        const response = await githubApi.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const searchUsers = async (query, location = '', minRepos = 0) => {
    try {
        const searchQuery = `${query}+location:${location}+repos:>${minRepos}`;
        const response = await githubApi.get(`/search/users?q=${searchQuery}`);
        return response.data.items;
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
};