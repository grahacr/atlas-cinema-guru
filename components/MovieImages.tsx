"use client";
import Image from "next/image";

type MovieImageProps = {
    movieId: string;
};

const MovieImage = ({ movieId }: MovieImageProps) => {
    const imagePath = `/images/${movieId}.webp`;

    return (
        <div className="p-8">
            <Image
            src={imagePath}
            alt={movieId}
            width={490}
            height={490}
            className="border-4 border-teal-400 rounded-lg"
        />
        </div>


    );
};

export default MovieImage;