import './App.css'
import RecipeList from `./components/RecipeList.jsx`
import AddRecipeForm from `./components/AddRecipeForm.jsx`

function App() {

  return (
      <>
          <div className="flex justify-center items-center h-screen">
              <div className="w-96 p-6 bg-white rounded-lg shadow-md">
                  <h1 className="text-2xl mb-6">Recipe Sharing App</h1>
                  <RecipeList />
                  <AddRecipeForm/>
              </div>
          </div>
      </>
  )
}

export default App
