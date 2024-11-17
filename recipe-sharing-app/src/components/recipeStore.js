import create from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],

    // Add a new recipe
    addRecipe: (newRecipe) =>
        set((state) => ({
            recipes: [...state.recipes, newRecipe],
        })),

    // Set recipes (replace the entire recipes array)
    setRecipes: (recipes) => set({ recipes }),

    // Delete a recipe by ID
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),

    // Update a recipe by ID
    updateRecipe: (id, updatedData) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === id ? { ...recipe, ...updatedData } : recipe
            ),
        })),

    // Search term state and action
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),

    // Computed state for filtered recipes
    getFilteredRecipes: () => {
        const state = useRecipeStore.getState(); // Access current state
        return state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
    },
}));

export default useRecipeStore;
