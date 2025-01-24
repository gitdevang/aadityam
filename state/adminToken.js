import { createContext, useContext, useState } from 'react';

// Create a context for the JWT token
const AdminTokenContext = createContext();

// Create a provider component
export const AdminTokenProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    return (
        <AdminTokenContext.Provider value={{ token, setToken }}>
            {children}
        </AdminTokenContext.Provider>
    );
};

// Create a custom hook to use the AdminTokenContext
export const useAdminToken = () => {
    return useContext(AdminTokenContext);
};