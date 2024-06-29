import DetailedMovieCard from "@/entities/movie/ui/MovieCard/DetailedMovieCard";
import { useGetMovieDetailsQuery } from "@/features/api/moviesApi";
import Spinner from "@/shared/components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import styles from "./MoviePage.module.css";
import ActorsList from "@/features/ActorsList/ActorsList";

export default function MoviePage() {
    const { movieId } = useParams<{ movieId: string }>();

    const { data: movieDetails, error, isLoading } = useGetMovieDetailsQuery(movieId as string);

    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading movie details.</div>;
    if (!movieDetails) return <div>No movie details found.</div>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <DetailedMovieCard movie={movieDetails} />
            </div>
            <ActorsList actors={movieDetails.actors} />
        </div>
    )
}
