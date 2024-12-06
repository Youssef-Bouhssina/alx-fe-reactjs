import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch recipe data');
                }
                const data = await response.json();
                const foundRecipe = data.find((item) => item.id === parseInt(id, 10));
                if (foundRecipe) {
                    setRecipe(foundRecipe);
                } else {
                    throw new Error('Recipe not found');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-center text-lg">Loading recipe...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-center text-red-500 text-lg">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {recipe && (
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        {recipe.title}
                    </h1>
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-64 object-cover rounded mb-6"
                    />
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                        {recipe.summary}
                    </p>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Ingredients
                        </h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Instructions
                        </h2>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeDetail;