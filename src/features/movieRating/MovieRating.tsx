import { useEffect, useState } from "react";
import styles from "./MovieRating.module.css";
import StarIcon from "@/shared/components/StarIcon/StarIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import { useRateMovieMutation } from "../api/ratingApi";

export default function MovieRating({ movieId, updateRating }: { movieId: string, updateRating?: (value: string) => void; }) {
    const [rating, setRating] = useState<number>(Number(0));
    const [hover, setHover] = useState<number>(0);

    useEffect(() => {
        const storedValue = localStorage.getItem(movieId);
        if (storedValue) {
            const userRating = JSON.parse(storedValue);
            setRating(Number(userRating.rating));
        }
    }, []);

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const [rateMovie] = useRateMovieMutation();

    const handleRating = async (rate: number) => {
        if (isAuthenticated) {
            setRating(rate);
            try {
                localStorage.setItem(movieId, JSON.stringify({
                    "rating": rate
                }));

                const res = await rateMovie({ movieId, user_rate: rate }).unwrap();
                if (updateRating) {
                    updateRating(String(res.newAverageRate));
                }
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
