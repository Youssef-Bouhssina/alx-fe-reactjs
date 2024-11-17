// RecipeList component
import { useRecipeStore } from './recipeStore.js';

const RecipeList = () => {
    // Fetch filtered recipes and search term from the store
    const getFilteredRecipes = useRecipeStore((state) => state.getFilteredRecipes);
    const searchTerm = useRecipeStore((state) => state.searchTerm);

    const filteredRecipes = getFilteredRecipes();

    return (
        <div>
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="mb-4 border p-4 rounded-md shadow-sm">
                        <h3 className="text-xl font-bold">{recipe.title}</h3>
                        <p className="text-gray-700">{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">
                    {searchTerm
                        ? `No recipes found for "${searchTerm}".`
                        : "No recipes available. Add some to get started!"}
                </p>
            )}
        </div>
    );
};

export default RecipeList;
