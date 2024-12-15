import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex items-center space-x-6">
            <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
            />
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800">
                    {user.name || user.login}
                </h3>
                {user.bio && (
                    <p className="text-gray-600 mt-2">{user.bio}</p>
                )}
                <div className="flex space-x-4 mt-4 text-gray-700">
                    <div>
                        <span className="font-semibold">Repos:</span> {user.public_repos}
                    </div>
                    <div>
                        <span className="font-semibold">Followers:</span> {user.followers}
                    </div>
                </div>
                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    View GitHub Profile
                </a>
            </div>
        </div>
    );
};

export default UserCard;