import { useEffect, useState } from "react";
import styles from "./MovieRating.module.css";
import StarIcon from "@/shared/components/StarIcon/StarIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import { useRateMovieMutation } from "../api/ratingApi";

export default function MovieRating({ movieId, ratingValue = "0", refetch }: { movieId: string, ratingValue: string, refetch: () => void }) {
    const [rating, setRating] = useState<number>(Number(ratingValue));
    const [hover, setHover] = useState<number>(0);

    useEffect(() => {
        if (rating !== Number(ratingValue)) {
            setRating(Number(ratingValue));
        }
    }, [ratingValue])

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const [rateMovie] = useRateMovieMutation();

    const handleRating = async (rate: number) => {
        if (isAuthenticated) {
            setRating(rate);
            try {
                await rateMovie({ movieId, user_rate: rate }).unwrap();
                refetch();
            } catch (error) {
                console.error('Failed to rate movie:', error);
            }
        }
    };


    return (
        <div className={styles.ratingContainer}>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <StarIcon
                        key={ratingValue}
                        value={index + 1}
                        path={hover === 0 ? rating && ratingValue <= rating ? 'active' : 'initial' :
                            ratingValue <= hover ? 'hover' : 'initial'}
                        onClick={() => handleRating(ratingValue)}
                        onMouseEnter={() => {
                            if (isAuthenticated) {
                                setHover(ratingValue);
                            }
                        }}
                        onMouseLeave={() => {
                            if (isAuthenticated) {
                                setHover(0);
                            }
                        }}
                    />
                );
            })}
        </div>
    )
}
