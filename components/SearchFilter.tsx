"use client";
import React from "react";
import { useFilterContext } from "./FilterContext";;

export default function SearchFilter() {

    const { searchTerm, setSearchTerm, minYear, setMinYear, maxYear, setMaxYear } = useFilterContext();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleMinYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value) || 0;
        setMinYear(value);
    };

    const handleMaxYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value) || 2025;
        setMaxYear(value);
    };


    return (
        <div className="flex flex-col space-y-4">
            <p className="text-white">Search</p>
                <input
                    className="w-80 border border-teal-300 rounded-4xl p-2"
                    type="text"
                    value={searchTerm}
                    placeholder="Search movies..."
                    onChange={handleSearch}
                    />
                    
                <div className="flex justify-between w-80">
                    <div className="flex flex-col mr-2">
                        <p className="text-white pb-2">Min Year</p>
                        <input
                        className="w-40 border rounded-4xl border-teal-300 p-2"
                        type="text"
                        value={minYear}
                        placeholder="minimum year"
                        onChange={handleMinYear}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white pb-2">Max Year</p>
                        <input
                        className="w-40 border rounded-4xl border-teal-300 p-2"
                        type="text"
                        value={maxYear}
                        placeholder="maximum year"
                        onChange={handleMaxYear}
                        />
                    </div>
                </div>
        </div>
    )
}