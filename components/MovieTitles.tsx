"use client";
import { useState, useEffect } from "react";
import { UsersTitle } from "@/lib/definitions";
import MovieImage from "./MovieImages";
import { useFilterContext } from "./FilterContext";

type MovieTitleProps = {
    genres: string[];
};

export default function MovieTitles({ genres }: MovieTitleProps) {

    const [titles, setTitles] = useState<UsersTitle[]>([]);
    const [page, setPage] = useState(1);
    const { searchTerm, minYear, maxYear, selectedGenres } = useFilterContext();

    useEffect(() => {
        const fetchData = async () => {
            const queryParams: Record<string, string> = {
                page: page.toString(),
                searchTerm: searchTerm.toLowerCase() || "",
                minYear: minYear !== 0 ? minYear.toString() : "",
                maxYear: maxYear !== 2025 ? maxYear.toString() : "",
                genres: selectedGenres.length > 0 ? selectedGenres.join(",") : "",
            };

            const filteredParams = Object.entries(queryParams).filter(
                ([Key, value]) => value !== "" && value !== undefined
            );

            const queryString = new URLSearchParams(filteredParams).toString();

            try {
                const response = await fetch(`/api/titles?${queryString}`);
                const data = await response.json();
                setTitles(data.title);
            } catch (error) {
                console.error('error fetching titles', error);
            }
        };
        fetchData();
    }, [page, searchTerm, minYear, maxYear, selectedGenres]);

    const filteredTitles = titles.filter((title) => {
        const matchesSearchTerm = title.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(title.genre);
        const matchesYear = 
        (minYear ? title.released >= minYear : true) &&
        (maxYear ? title.released <= maxYear : true);
        return matchesSearchTerm && matchesGenre && matchesYear;
    });
    const handlePage = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {filteredTitles.map((title) => (
                    <div key={title.id} className="group relative rounded-xl overflow-hidden shadow-lg">
                        <MovieImage movieId={title.id} />
                            <div className="group-hover:flex flex-col absolute bottom-0 left-0 w-full h-1/3 bg-blue-950 bg-opacity-80 p-6 text-white hidden">
                                <h1 className="text-2xl font-semibold">{title.title} ({title.released})</h1>
                                <p className="text-sm mt-2">{title.synopsis}</p>
                                <div className="mt-4 inline-block bg-teal-400 text-white py-1 px-4 rounded-lg">
                                    {title.genre}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => handlePage(page - 1)}
                    disabled={page <= 1}
                    className="bg-teal-500 px-4 py-2 rounded"
                    >
                    Previous
                </button>
                <span className="mx-4">Page {page}</span>
                <button
                    onClick={() => handlePage(page + 1)}
                    className="bg-teal-500 px-4 py-2 rounded"
                    >
                    Next
                </button>
            </div>
        </div>
    );
}