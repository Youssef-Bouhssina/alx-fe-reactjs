import React, { useState, useEffect } from 'react';

const RecipeApp = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data.json');
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

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                Delicious Recipes
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div
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
                            <p className="text-gray-600 line-clamp-3">
                                {recipe.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};