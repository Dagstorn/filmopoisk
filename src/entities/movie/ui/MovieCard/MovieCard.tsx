import styles from "./MovieCard.module.css"
import { Movie } from '../../../../shared/types';
import MovieRating from "@/features/movieRating/MovieRating";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "@/shared/components/Spinner/Spinner";

function MovieCard({ movie }: { movie: Movie }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

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
                    <span className={styles.desc_name}>Жанр</span>
                    <p className={styles.desc_val}>{movie.genre}</p>
                </div>
                <div className={styles.desc_row}>
                    <span className={styles.desc_name}>Год выпуска</span>
                    <p className={styles.desc_val}>{movie.release_year}</p>
                </div>
                <div className={styles.desc_row}>
                    <span className={styles.desc_name}>Описание</span>
                    <p className={styles.desc_val}>{movie.description}</p>
                </div>
            </div>
            <div className={styles.rating}>
                <MovieRating ratingValue={movie.rating} />
            </div>
        </div>
    );
}

export default MovieCard;
