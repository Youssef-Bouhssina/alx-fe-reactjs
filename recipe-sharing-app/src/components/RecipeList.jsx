import { useRecipeStore } from '../recipeStore.js';

const RecipeList = () => {
    // Get the filtered recipes from the Zustand store
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

    return (
        <div>
            {/* Check if there are any filtered recipes */}
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="mb-4">
                        <h3 className="font-semibold">{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;
