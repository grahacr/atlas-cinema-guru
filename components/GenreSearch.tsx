"use client";
import { useFilterContext } from "./FilterContext";

type GenreSearchProps = {
    genres: string[];
}

export default function GenreSearch({ genres }: GenreSearchProps) {
    const { selectedGenres, setSelectedGenres } = useFilterContext();
    
    const handleGenreClick = (genre: string) => {
        const updatedGenres = selectedGenres.includes(genre)
        ? selectedGenres.filter((g) => g !== genre)
        : [...selectedGenres, genre];
        setSelectedGenres(updatedGenres);
    };

    return (
        <div className="flex flex-col space-y-4 w-full pr-8">
            <p className="text-xl font-semibold text-white">Genres</p>
            <div className="grid grid-cols-5 gap-2">
            {genres.slice(0, 10).map((genre, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 rounded-full border border-teal-300
                        ${selectedGenres.includes(genre) ? "bg-teal-300 text-blue-950" : "text-blue-950 text-white"}
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
