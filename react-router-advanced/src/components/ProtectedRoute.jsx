import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Adjust the path based on your project structure

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth(); // Use the custom hook

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
