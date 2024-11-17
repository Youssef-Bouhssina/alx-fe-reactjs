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

        searchTerm: '',
        setSearchTerm: (term) => set({ searchTerm: term }),
        filteredRecipes: [],
        filterRecipes: () => set(state => ({
            filteredRecipes: state.recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ))
    })),
    }));
}));

export default useRecipeStore;
