import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Header Section */}
                <header className="bg-blue-600 dark:bg-blue-700 text-white py-4 shadow-lg">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl font-bold text-center">
                            Recipe Collection
                        </h1>
                    </div>
                </header>

                {/* Main Content Section */}
                <main className="flex-grow bg-gray-100 dark:bg-gray-900 py-8">
                    <div className="container mx-auto px-4">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/recipe/:id" element={<RecipeDetail />} />
                            <Route path="/add-recipe" element={<AddRecipeForm />} />
                        </Routes>
                    </div>
                </main>

                {/* Footer Section */}
                <footer className="bg-gray-800 dark:bg-gray-700 text-gray-400 py-6">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} <span
                            className="font-semibold text-white">Recipe App</span>. All Rights Reserved.
                        </p>
                        <p className="text-xs mt-2 text-gray-500">
                            Made with ❤️ by the Recipe Team.
                        </p>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;