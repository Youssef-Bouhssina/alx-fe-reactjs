import React, { useState } from 'react';
import { githubService } from '../services/githubService';

function Search() {
  const [searchParams, setSearchParams] = useState({
    query: '',
    location: '',
    minRepositories: ''
  });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchParams(prev => ({
      ...prev,
      [e.target.name]: e.target.value // Explicitly using e.target.value
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchParams.query && !searchParams.location && !searchParams.minRepositories) {
      setError('Please provide at least one search parameter');
      return;
    }

    setLoading(true);
    setSearchResults([]);
    setError(null);

    try {
      const data = await githubService.searchUsers({
        query: searchParams.query,
        location: searchParams.location,
        minRepositories: searchParams.minRepositories ? parseInt(searchParams.minRepositories) : 0
      });

      setSearchResults(data.items);
    } catch (err) {
      setError('An error occurred while searching users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input 
            type="text" 
            name="query"
            value={searchParams.query}
            onChange={handleInputChange}
            placeholder="Username or name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input 
            type="text" 
            name="location"
            value={searchParams.location}
            onChange={handleInputChange}
            placeholder="Location (e.g., San Francisco)"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input 
            type="number" 
            name="minRepositories"
            value={searchParams.minRepositories}
            onChange={handleInputChange}
            placeholder="Minimum number of repositories"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-500 text-center">
          {error}
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <div className="space-y-4">
            {searchResults.map(user => (
              <div 
                key={user.id} 
                className="flex items-center bg-gray-100 p-4 rounded-md shadow-sm"
              >
                <img 
                  src={user.avatar_url} 
                  alt={`${user.login}'s avatar`} 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{user.login}</h3>
                  <a 
                    href={user.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && searchResults.length === 0 && searchParams.query && (
        <div className="mt-4 text-center text-gray-500">
          Looks like we can't find the user
        </div>
      )}
    </div>
  );
}

export default Search;
