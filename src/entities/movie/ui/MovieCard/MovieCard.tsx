import { Link } from 'react-router-dom';
import styles from "./MovieCard.module.css"
interface MovieCardProps {
    movie: {
        id: string;
        title: string;
        genre: string;
        year: number;
    };
}

function MovieCard({ movie }: MovieCardProps) {
    return (
        <div className={styles.card}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.year}</p>
            <Link to={`/movie/${movie.id}`}>Подробнее</Link>
        </div>
    );
}

export default MovieCard;
