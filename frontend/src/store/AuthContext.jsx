import { createContext, useCallback, useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../redux-toolkit/cart-slice';

const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    userId: null,
    role: null,
    isLoading: true,
    login: () => {},
    logout: () => {},
    checkAuth: () => {}
});

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [role, setRole] = useState(null);
    const [expiration, setExpiration] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        const storedRole = localStorage.getItem('role');
        const storedExpiration = localStorage.getItem('expiration');
        if (storedToken && storedUserId && storedExpiration) {
            const expirationDate = new Date(storedExpiration);
            if (expirationDate > new Date()) {
                setToken(storedToken);
                setUserId(storedUserId);
                setRole(storedRole);
                setExpiration(expirationDate);
                setIsLoggedIn(true);
            } else {
                logout();
            }
        }
        setIsLoading(false);
    }, []);

    const login = useCallback((token, userId, expiration, role) => {
        setToken(token);
        setUserId(userId);
        setRole(role);
        setExpiration(expiration);
        setIsLoggedIn(true);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', role);
        localStorage.setItem('expiration', expiration.toISOString());
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setRole(null);
        setExpiration(null);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        localStorage.removeItem('expiration');
        dispatch(cartSliceActions.clearCart());
    }, [dispatch]);

    const checkAuth = useCallback(() => {
        if (expiration && new Date(expiration) <= new Date()) {
            logout();
        }
    }, [expiration, logout]);

    const AuthValue = {
        isLoggedIn,
        token,
        userId,
        role,
        isLoading,
        login,
        logout,
        checkAuth
    };
    
    return (
        <AuthContext.Provider value={AuthValue}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthContext;
