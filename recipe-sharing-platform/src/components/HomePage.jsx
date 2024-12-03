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
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white shadow-md rounded-lg p-6">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h2 className="text-xl font-bold mt-2">{recipe.title}</h2>
                        <p className="text-gray-700">{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeApp;
