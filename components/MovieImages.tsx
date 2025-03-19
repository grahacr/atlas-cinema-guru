"use client";
import Image from "next/image";

type MovieImageProps = {
    movieId: string;
};

const MovieImage = ({ movieId }: MovieImageProps) => {
    const imagePath = `/images/${movieId}.webp`;

    return (
        <div className="w-full h-full">
            <Image
                src={imagePath}
                alt={movieId}
                layout="responsive"
                width={490}
                height={490}
                className="object-cover w-full h-full"
            />
        </div>
    );
};

export default MovieImage;
