import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { recipes, updateRecipe } = useRecipeStore();
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

    const [title, setTitle] = useState(recipe?.title || '');
    const [ingredients, setIngredients] = useState(recipe?.ingredients.join(', ') || '');

    if (!recipe) {
        return <p>Recipe not found!</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(recipe.id, {
            title,
            ingredients: ingredients.split(',').map((ing) => ing.trim()),
        });
        navigate(`/recipes/${recipe.id}`); // Redirect to the recipe details page
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Recipe</h2>
            <div className="mb-4">
                <label className="block mb-2">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border rounded w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Ingredients (comma-separated):</label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="p-2 border rounded w-full"
                />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Save Changes
            </button>
        </form>
    );
};

export default EditRecipeForm;
