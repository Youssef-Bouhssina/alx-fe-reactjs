import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddRecipeForm from './AddRecipeForm';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching the data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                Delicious Recipes
            </h1>
            {/* Recipe Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <Link
                        to={`/recipe/${recipe.id}`}
                        key={recipe.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {recipe.title}
                            </h2>
                            <p className="text-gray-600 line-clamp-3">{recipe.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {/* Add Recipe Form */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h2>
                <AddRecipeForm onAddRecipe={handleAddRecipe} />
            </div>
        </div>
    );
};

export default HomePage;;