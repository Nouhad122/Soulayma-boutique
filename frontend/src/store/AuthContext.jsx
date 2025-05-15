import { createContext, useCallback, useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../redux-toolkit/cart-slice';

const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    userId: null,
    login: () => {},
    logout: () => {},
    checkAuth: () => {}
});

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [expiration, setExpiration] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        const storedExpiration = localStorage.getItem('expiration');
        if (storedToken && storedUserId && storedExpiration) {
            const expirationDate = new Date(storedExpiration);
            if (expirationDate > new Date()) {
                setToken(storedToken);
                setUserId(storedUserId);
                setExpiration(expirationDate);
                setIsLoggedIn(true);
            } else {
                logout();
            }
        }
    }, []);

    const login = useCallback((token, userId, expiration) => {
        setToken(token);
        setUserId(userId);
        setExpiration(expiration);
        setIsLoggedIn(true);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('expiration', expiration.toISOString());
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setExpiration(null);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
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
