import React from 'react';
import Search from './components/Search';
import './index.css';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">GitHub User Search</h1>
        <p className="text-gray-600 mt-2">Search GitHub users by username, location, and repository count</p>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
