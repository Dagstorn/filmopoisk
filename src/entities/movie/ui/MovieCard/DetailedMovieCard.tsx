import styles from "./DetailedMovie.module.css"
import { MovieDetailed } from '../../../../shared/types';
import MovieRating from "@/features/movieRating/MovieRating";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "@/shared/components/Spinner/Spinner";

function DetailedMovieCard({ movie }: { movie: MovieDetailed, refetch: () => void }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [avgRating, setAvgRating] = useState(movie.rating);
    const updateRating = (rating: string) => {
        setAvgRating(rating);
    }


    return (
        <div className={styles.card}>
            <div className={styles.poster} onClick={() => {
                navigate(`/movies/${movie.id}`);
            }}>
                {loading && <Spinner />}
                <img
                    src={`http://localhost:3030/static/images/${movie.id}`}
                    alt=""
                    onLoad={() => {
                        setLoading(false);
                    }}
                    className={loading ? styles.hidden : styles.poster}
                />

            </div>
            <div className={styles.info} onClick={() => {
                navigate(`/movies/${movie.id}`);
            }}>
                <span className={styles.title}>{movie.title}</span>
                <div className={styles.desc_row}>
                    <span className={styles.desc_name}>Жанр:</span>
                    <p className={styles.desc_val}>{movie.genre}</p>
                </div>
                <div className={styles.desc_row}>
                    <span className={styles.desc_name}>Год выпуска:</span>
                    <p className={styles.desc_val}>{movie.release_year}</p>
                </div>
                <div className={styles.desc_row}>
                    <span className={styles.desc_name}>Рейтинг:</span>
                    <p className={styles.desc_val}>{avgRating}</p>
                </div>
                <div className={styles.description_row}>
                    <span className={styles.desc_name}>Описание</span>
                    <p className={styles.desc_val}>{movie.description}</p>
                </div>
            </div>
            <div className={styles.rating}>
                <MovieRating updateRating={updateRating} movieId={String(movie.id)} />
            </div>
        </div>
    );
}

export default DetailedMovieCard;
