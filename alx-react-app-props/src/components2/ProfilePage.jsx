import React, { useContext } from 'react';
import UserContext from './UserContext.js'; // Import the UserContext

function UserProfile() {
    const userData = useContext(UserContext); // Access the userData from context

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserProfile;