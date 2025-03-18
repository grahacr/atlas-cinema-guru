"use client";
import { useState } from "react";

type GenreSearchProps = {
    genres: string[];
}

export default function GenreSearch({ genres }: GenreSearchProps) {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    
    const handleGenreClick = (genre: string) => {
        setSelectedGenre(genre);
    };

    return (
        <div className="flex flex-col space-y-4 w-full pr-8">
            <p className="text-xl font-semibold text-white">Genres</p>
            <div className="grid grid-cols-5 gap-2">
            {genres.slice(0, 10).map((genre, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 rounded-full border border-teal-300
                        ${selectedGenre === genre ? "bg-teal-300 text-blue-950" : "text-blue-950 text-white"}
                        text-center inline-flex items-center justify-center min-w-fit max-w-full`}
                    onClick={() => handleGenreClick(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>
        </div>
    );
}