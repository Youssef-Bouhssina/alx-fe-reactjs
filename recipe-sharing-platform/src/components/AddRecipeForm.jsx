import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const validationErrors = {};
        if (!title.trim()) {
            validationErrors.title = 'Title is required.';
        }
        const ingredientsArray = ingredients.split('\n').map((item) => item.trim()).filter(Boolean);
        if (ingredientsArray.length < 2) {
            validationErrors.ingredients = 'Please list at least two ingredients.';
        }
        const stepsArray = steps.split('\n').map((item) => item.trim()).filter(Boolean);
        if (stepsArray.length < 1) {
            validationErrors.steps = 'Please include at least one step.';
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const newRecipe = {
            id: Date.now(),
            title,
            ingredients: ingredients.split('\n').map((item) => item.trim()).filter(Boolean),
            steps: steps.split('\n').map((item) => item.trim()).filter(Boolean),
        };

        if (onAddRecipe) {
            onAddRecipe(newRecipe);
        }

        setTitle('');
        setIngredients('');
        setSteps('');
        setErrors({});
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
                Add a New Recipe
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 space-y-6"
            >
                {/* Title Input */}
                <div>
                    <label
                        htmlFor="title"
                        className="block text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300"
                    >
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full border ${
                            errors.title ? 'border-red-500' : 'border-gray-300'
                        } rounded px-4 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 ${
                            errors.title ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        required
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                    )}
                </div>

                {/* Ingredients Input */}
                <div>
                    <label
                        htmlFor="ingredients"
                        className="block text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300"
                    >
                        Ingredients (one per line)
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="5"
                        className={`w-full border ${
                            errors.ingredients ? 'border-red-500' : 'border-gray-300'
                        } rounded px-4 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 ${
                            errors.ingredients ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        required
                    ></textarea>
                    {errors.ingredients && (
                        <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
                    )}
                </div>

                {/* Steps Input */}
                <div>
                    <label
                        htmlFor="steps"
                        className="block text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300"
                    >
                        Preparation Steps (one per line)
                    </label>
                    <textarea
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        rows="5"
                        className={`w-full border ${
                            errors.steps ? 'border-red-500' : 'border-gray-300'
                        } rounded px-4 py-2 text-gray-800 dark:text-gray-100 dark:bg-gray-900 focus:outline-none focus:ring-2 ${
                            errors.steps ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                        }`}
                        required
                    ></textarea>
                    {errors.steps && (
                        <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
