import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile/*" element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }>
                    <Route path="details" element={<ProfileDetails />} />
                    <Route path="settings" element={<ProfileSettings />} />
                </Route>
                <Route path="/blog/:postId" element={<BlogPost />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;