import React, { useState } from 'react';
import UserContext from './UserContext'; // Import UserContext
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [userData, setUserData] = useState({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
    }); // Initialize user data in state

    const handleUserDataChange = (newUserData) => {
        setUserData(newUserData); // Update user data state
    };

    return (
        <UserContext.Provider value={{ userData, handleUserDataChange }}>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
            <UserProfile userData={userData} onUserDataChange={handleUserDataChange} /> {/* Pass user data and update function */}
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                {/* ... (count functionality remains the same) ... */}
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </UserContext.Provider>
    );
}

export default App;