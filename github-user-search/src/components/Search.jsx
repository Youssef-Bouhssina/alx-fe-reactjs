import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data); // Store user data
        } catch (err) {
            setError(true); // Handle errors
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-lg p-6 mb-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={username}
                        onChange={handleInputChange}
                        placeholder="Enter GitHub username"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Search
                </button>
            </form>

            {loading && <div className="text-center text-gray-600">Loading...</div>}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    Looks like we can't find the user
                </div>
            )}
            {userData && (
                <div className="text-center">
                    <img
                        src={userData.avatar_url}
                        alt={`${userData.login} avatar`}
                        className="mx-auto rounded-full"
                        width={100}
                    />
                    <p className="mt-2 font-semibold">Name: {userData.name || 'N/A'}</p>
                    <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default Search;
