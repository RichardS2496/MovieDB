import { usePopularMovies } from "./usePopularMovies";
import { MovieCard } from "./MovieCard";
import "../styles/mainHero.css";
import { Link } from "react-router-dom";

export function MainHero() {
  const { movies, isLoading, isError } = usePopularMovies();

  if (isError) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading...</div>;

  const movieInfo = movies[0];

  const backgroundImage = `https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`;

  const findYear = movieInfo.release_date.split("-");

  function shortMovieYear(findYear) {
    return findYear[0];
  }

  return (
    <>
      <section
        className="hero-info-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="internal-hero flex flex-row h-96 gap-12">
          <img
            className="posterImg"
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt=""
          />
          <div className="flex flex-col gap-4">
            <h4 className="title-movie">{movieInfo.title}</h4>
            <h5 className="movieYear">{shortMovieYear(findYear)}</h5>
            <p className="contentInfo-movie font-light">{movieInfo.overview}</p>
            <Link
              className="bg-blue-700 px-8 py-3 w-fit rounded-full text-white font-bold"
              to={`/movie/${movieInfo.id}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="section-movies">
        <ul className="movies-container">
          {movies.slice(1).map((movieData) => (
            <li key={movieData.id}>
              <Link to={`/movie/${movieData.id}`}>
                <MovieCard movieData={movieData} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
