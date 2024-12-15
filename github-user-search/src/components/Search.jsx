import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      if (
        (location && !data.location?.toLowerCase().includes(location.toLowerCase())) ||
        (minRepos && data.public_repos < parseInt(minRepos))
      ) {
        throw new Error('No matching results');
      }
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => handleInputChange(e, setUsername)}
            placeholder="Enter GitHub username"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => handleInputChange(e, setLocation)}
            placeholder="Enter location (optional)"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            value={minRepos}
            onChange={(e) => handleInputChange(e, setMinRepos)}
            placeholder="Enter minimum repositories (optional)"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">No matching results found</p>}
      {userData && (
        <div className="mt-6 p-4 border rounded-md shadow-md">
          <img
            src={userData.avatar_url}
            alt={`${userData.login} avatar`}
            width={100}
            className="mx-auto rounded-full"
          />
          <p className="mt-2 text-center text-lg font-medium">Name: {userData.name || 'N/A'}</p>
          <p className="text-center text-sm text-gray-500">Location: {userData.location || 'N/A'}</p>
          <p className="text-center text-sm text-gray-500">Repositories: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-indigo-600 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
