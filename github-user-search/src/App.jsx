import React from 'react'
import Search from './components/Search'

function App() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                GitHub User Search
            </h1>
            <Search />
        </div>
    )
}

export default App