"use client";
import { Star, Clock } from "lucide-react"

type movieButtonProps = {
    titleId: string,
    userEmail: string,
    isFavorited: boolean,
    isWatchLater: boolean,
    onFavoriteClick: (id: string) => void;
    onWatchLaterClick: (id: string) => void;
};

export default function MovieButtons({ titleId, userEmail, isFavorited, isWatchLater, onFavoriteClick, onWatchLaterClick}: movieButtonProps) {
    return (
        <div className="flex gap-4">
            <button onClick={() => onFavoriteClick(titleId)} className={`transition-all ${isFavorited ? "text-white bg-teal-400" : "text-teal-400"} p-2 rounded-full`}>
                <Star fill={isFavorited ? "white" : "none"}></Star>
            </button>
            <button onClick={() => onWatchLaterClick (titleId)} className={`transition-all ${isWatchLater ? "text-white bg-teal-400" : "text-teal-400"} p-2 rounded-full`}>
                <Clock fill={isWatchLater ? "white" : "none"}></Clock>
            </button>
        </div>
    );
}