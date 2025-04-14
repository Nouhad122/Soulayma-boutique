import { createContext, useCallback, useState, useEffect } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});

export const AuthContextProvider = ({ children }) => {
    // Initialize state from localStorage if available
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedLoginState = localStorage.getItem('isLoggedIn');
        return storedLoginState === 'true';
    });

    // Update localStorage when isLoggedIn changes
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    const login = useCallback(() =>{
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() =>{
        setIsLoggedIn(false);
    }, []);

    const AuthValue = {
        isLoggedIn,
        login,
        logout
    };
    
    console.log(isLoggedIn);
    
    return (
        <AuthContext.Provider value={AuthValue}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;
