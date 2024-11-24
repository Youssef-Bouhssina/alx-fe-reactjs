import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import ProfileSettings from './components/ProfileSettings.jsx';
import BlogPost from './components/BlogPost.jsx';
import Login from './components/Login.jsx';

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