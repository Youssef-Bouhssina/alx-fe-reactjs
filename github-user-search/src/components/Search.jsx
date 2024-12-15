import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';
import UserCard from './UserCard';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState(0);
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const userData = await fetchUserData(username);
            setUser(userData);

            const searchResults = await searchUsers(username, location, minRepos);
            setUsers(searchResults);
        } catch (err) {
            setError('Looks like we can\'t find the user');
            setUser(null);
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <form
                onSubmit={handleSearch}
                className="bg-white shadow-md rounded-lg p-6 mb-4"
            >
                <div className="mb-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="GitHub Username"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location (optional)"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(Number(e.target.value))}
                        placeholder="Min Repositories"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Search
                </button>
            </form>

            {loading && (
                <div className="text-center text-gray-600">Loading...</div>
            )}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    {error}
                </div>
            )}

            {user && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">User Details</h2>
                    <UserCard user={user} />
                </div>
            )}

            {users.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Search Results</h2>
                    {users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;