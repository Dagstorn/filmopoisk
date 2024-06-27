import { useParams } from "react-router-dom";

export default function MoviePage() {
    const movieId = useParams<{ movieId: string }>().movieId;

    return (
        <div>
            MoviePage {movieId}
        </div>
    )
}
