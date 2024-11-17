import './App.css';
import useRecipeStore from './recipeStore.js';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import Home from './components/Home'; // Assume this lists all recipes
import SearchBar from './components/SearchBar'; // The SearchBar component for filtering

function App() {
    // Zustand store actions and state
    const favorites = useRecipeStore((state) => state.favorites);
    const recommendations = useRecipeStore((state) => state.recommendations);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

    return (
        <Router>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96 p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl mb-6">Recipe Sharing App</h1>

                    {/* Search Bar for filtering recipes */}
                    <SearchBar />

                    {/* Routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes/:id" element={<RecipeDetails />} />
                        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
                    </Routes>

                    {/* Recipe List */}
                    <RecipeList />

                    {/* Add Recipe Form */}
                    <AddRecipeForm />

                    {/* Favorites Section */}
                    <div className="mt-4">
                        <h2 className="text-lg mb-2">Favorites</h2>
                        {favorites.length > 0 ? (
                            favorites.map((id) => (
                                <div key={id} className="flex justify-between items-center p-2 bg-gray-100 rounded">
                                    <span>{`Recipe ID: ${id}`}</span>
                                    <button
                                        className="text-red-500"
                                        onClick={() => removeFavorite(id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No favorites yet.</p>
                        )}
                    </div>

                    {/* Recommendations Section */}
                    <div className="mt-4">
                        <h2 className="text-lg mb-2">Recommendations</h2>
                        <button
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                            onClick={generateRecommendations}
                        >
                            Generate Recommendations
                        </button>
                        {recommendations.length > 0 ? (
                            recommendations.map((recipe) => (
                                <div key={recipe.id} className="mt-2 p-2 bg-gray-100 rounded">
                                    <h3>{recipe.title}</h3>
                                    <p>{recipe.description}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 mt-2">No recommendations yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
