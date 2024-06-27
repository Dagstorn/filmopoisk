import MovieCard from "../MovieCard/MovieCard";

export default function MoviesList() {
    const movies = [
        { id: '1', title: 'Фильм 1', genre: 'Драма', year: 2021 },
        { id: '2', title: 'Фильм 2', genre: 'Комедия', year: 2020 },
    ];
    return (

        <div>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
