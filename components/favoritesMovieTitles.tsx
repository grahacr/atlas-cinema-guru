"use client";
import { UsersTitle, Title } from "@/lib/definitions";
import MovieImage from "./MovieImages";
import MovieButtons from "./movieButtons";

type FavoritesMovieTitlesProps = {
    favorites: (Omit<UsersTitle, 'synopsis'> & { synopsis?: string })[];
    userEmail: string;
};

export default function FavoritesMovieTitles({ favorites, userEmail}: FavoritesMovieTitlesProps) {
    
    const isFavorited = (movieId: string) => {
        const movie = favorites.find((title) => title.id === movieId);
        return movie ? movie.favorited : false;
    };

    const isWatchLater = (movieId: string) => {
        const movie = favorites.find((title) => title.id === movieId);
        return movie ? movie.watchLater : false;
    };

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {favorites.map((title) => (
            <div key={title.id} className="group relative rounded-xl overflow-hidden shadow-lg">
                <MovieImage movieId={title.id} />
                <MovieButtons
                    titleId={title.id}
                    userEmail={userEmail}
                    isFavorited={isFavorited(title.id)}
                    isWatchLater={isWatchLater(title.id)}
                    onFavoriteClick={(id) => {}}
                    onWatchLaterClick={(id) => {}}
                    />
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
    );
}