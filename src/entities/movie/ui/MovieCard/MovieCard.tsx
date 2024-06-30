import styles from "./MovieCard.module.css"
import { Movie } from '@/shared/types';
import MovieRating from "@/features/movieRating/MovieRating";
import { useState } from "react";
import Spinner from "@/shared/components/Spinner/Spinner";
import Link from "next/link";
function MovieCard({ movie }: { movie: Movie }) {
    const [loading, setLoading] = useState(true);
    return (
        <div className={styles.card}>
            <Link className={styles.link} href={`/movies/${movie.id}`}>
                <div className={styles.poster}>
                    {loading && <Spinner extraClass={styles.posterSpinner} />}
                    <img
                        src={`http://localhost:3030/static/images/${movie.id}`}
                        alt=""
                        onLoad={() => {
                            setLoading(false);
                        }}
                        className={loading ? styles.hidden : styles.poster}
                    />
                </div>
            </Link>

            <Link className={styles.link} href={`/movies/${movie.id}`}>
                <div className={styles.info}>
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
            </Link>

            <div className={styles.rating}>
                <MovieRating movieId={String(movie.id)} />
            </div>
        </div>
    );
}

export default MovieCard;
