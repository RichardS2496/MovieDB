import { MovieCard } from "./MovieCard";
import { usePopularMovies } from "./usePopularMovies";
import "../styles/popularMovies.css";

export function PopularMovies() {
  const { movies, isLoading, isError } = usePopularMovies();

  if (isError) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <section className="section-movies">
      <ul className="movies-container">
        {movies.map((movieData) => (
          <li key={movieData.id}>
            <MovieCard movieData={movieData} />
          </li>
        ))}
      </ul>
    </section>
  );
}
