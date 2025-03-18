
"use client";
import { useState, useEffect } from "react";
import { UsersTitle } from "@/lib/definitions";
import MovieImage from "./MovieImages";

type MovieTitleProps = {
    genres: string[];
};

export default function MovieTitles({ genres }: MovieTitleProps) {

    const [titles, setTitles] = useState<UsersTitle[]>([]);
    const [page, setPage] = useState(1);
    const [minYear, setMinYear] = useState(1990);
    const [maxYear, setMaxYear] = useState(2025);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const queryParams = new URLSearchParams({
                    page: page.toString(),
                    minYear: minYear.toString(),
                    maxYear: maxYear.toString(),
                    genres: genres.join(","),
                });

                const response = await fetch(`/api/titles?${queryParams.toString()}`);
                const data = await response.json();
                setTitles(data.title)
            } catch (error) {
                console.error('Error fetching titles', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page, minYear, maxYear, genres]);

    const handlePage = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {loading ? (
                <p>loading...</p>
            ) : (
                titles.map((title) => (
                    <div
                        key={title.id}
                        className="group relative rounded-xl overflow-hidden shadow-lg"
                    >
                        <MovieImage movieId={title.id} />
                        <div className="hidden group-hover:flex flex-col absolute inset-5 bg-blue bg-opacity-50 p-6">
                            <h1 className="text-lg text-white">{title.title} ({title.released})</h1>
                            <div className="text-sm text-white">{title.genre}</div>
                        </div>
                    </div>
                ))
            )}
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