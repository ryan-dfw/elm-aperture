import React, { createContext, useState, useContext } from 'react';

interface ContextProps {
    children: React.ReactNode;
}

interface ContextValue {
    shouldShowNav: boolean;
    setShouldShowNav: (value: boolean) => void;
}

const Context = createContext<ContextValue | undefined>(undefined);

export const useContextValue = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useContextValue must be used within a ContextProvider');
    }
    return context;
};

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
    const [shouldShowNav, setShouldShowNav] = useState(true);

    const contextValue: ContextValue = {
        shouldShowNav,
        setShouldShowNav,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};
