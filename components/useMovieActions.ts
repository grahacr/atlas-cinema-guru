import { useState } from "react";

export default function useMovieActions(userEmail: string, onUpdate: (updatedTitle: any) => void) {
    const [loading, setLoading] = useState(false);

    const handleFavoriteClick = async (titleId: string, isFavorited: boolean) => {
        if (loading) return;
        setLoading(true);
        try {
            if (isFavorited) {
                await fetch(`/api/favorites/${titleId}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            } else {
                await fetch(`/api/favorites/${titleId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }

            onUpdate({ id: titleId, favorited: isFavorited });
        } catch (error) {
            console.error('error handling favorites', error);
        } finally {
            setLoading(false);
        }
    };

    const handleWatchLaterClick = async (titleId: string, isWatchLater: boolean) => {
        if (loading) return;
        setLoading(true);
        
        try {
            if (isWatchLater) {
                await fetch(`/api/watch-later/${titleId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
            
            onUpdate({ id: titleId, watchLater: !isWatchLater });
        } catch (error) {
            console.error('error handling watch later list', error);
        } finally {
            setLoading(false);
        }
    }

    return {
        handleFavoriteClick,
        handleWatchLaterClick,
        loading,
    };
}