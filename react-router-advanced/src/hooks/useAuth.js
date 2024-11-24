export const useAuth = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};
