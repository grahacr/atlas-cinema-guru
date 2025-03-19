"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type FilterContextType = {
    searchTerm: string,
    setSearchTerm: (term: string) => void;
    minYear: number;
    setMinYear: (year: number) => void;
    maxYear: number;
    setMaxYear: (year: number) => void;
    selectedGenres: string[];
    setSelectedGenres: (genres: string[]) => void;
};

const filterContext = createContext<FilterContextType | undefined>(undefined);

type FilterProviderProps = {
    children: ReactNode;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [minYear, setMinYear] = useState<number>(0);
    const [maxYear, setMaxYear] = useState<number>(2025);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

    return (
        <filterContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                minYear,
                setMinYear,
                maxYear,
                setMaxYear,
                selectedGenres,
                setSelectedGenres,
            }}
            >
                {children}
            </filterContext.Provider>
    );
};

export const useFilterContext = () => {
    const context = useContext(filterContext);
    if (!context) {
        throw new Error('useFilterContext must be used within filterProvider');
    }
    return context;
};
