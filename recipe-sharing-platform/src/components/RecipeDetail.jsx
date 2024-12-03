import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const RecipeDetail = () => {
    const {id} = useParams(); // Get the recipe ID from the route parameters
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
        return <p className="text-center text-lg">Loading recipe...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 text-lg">Error: {error}</p>;
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
                            <li>Ingredient 1</li>
                            <li>Ingredient 2</li>
                            <li>Ingredient 3</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Cooking Instructions
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Step 1: Do this. <br/>
                            Step 2: Do that. <br/>
                            Step 3: Enjoy your dish!
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeDetail;
