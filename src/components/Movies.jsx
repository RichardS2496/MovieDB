import { usePopularMovies } from "./usePopularMovies";
import { MovieCard } from "./MovieCard";
import "../styles/moviesView.css";
import { Link } from "react-router-dom";
import { MoviesLateralMenu } from "./MoviesLateralMenu";

export function Movies() {
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
      {/* Sección de encabezado con la película destacada */}
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
            alt="Poster"
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

      {/* Sección principal con el menú lateral (MoviesLateralMenu) y la lista de películas */}
      <section className="section-movies">
        <div className="movies-listViewer">
          {/* MoviesLateralMenu actúa como el menú lateral o sidebar */}
          <MoviesLateralMenu />

          {/* Contenedor principal de las películas populares */}
          <div className="movies-container">
            <h4 className="text-slate-300 text-2xl font-bold">
              POPULAR MOVIES
            </h4>
            <ul className="ul-container">
              {movies.slice(1).map((movieData) => (
                <li key={movieData.id}>
                  <Link to={`/movie/${movieData.id}`}>
                    <MovieCard movieData={movieData} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
