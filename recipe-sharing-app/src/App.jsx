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
    return (
        <Router>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96 p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl mb-6">Recipe Sharing App</h1>
                    {/* Search Bar for filtering recipes */}
                    <SearchBar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes/:id" element={<RecipeDetails />} />
                        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
                    </Routes>

                    {/* Recipe List */}
                    <RecipeList />

                    {/* Add Recipe Form */}
                    <AddRecipeForm />
                </div>
            </div>
        </Router>
    );
}

export default App;
