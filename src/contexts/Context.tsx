import React, { createContext, useState, useContext } from 'react';

interface ContextProps {
    children: React.ReactNode;
}

interface ContextValue {
    shouldShowNav: boolean;
    setShouldShowNav: (value: boolean) => void;
    selectedDateTime: { date: string, start: string, end: string };
    setSelectedDateTime: (value: { date: string; start: string; end: string }) => void;
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
    const [selectedDateTime, setSelectedDateTime] = useState<{ date: string, start: string, end: string }>({ date: '', start: '', end: '' });

    const contextValue: ContextValue = {
        shouldShowNav,
        setShouldShowNav,
        selectedDateTime,
        setSelectedDateTime,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};
