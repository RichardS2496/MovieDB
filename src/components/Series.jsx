import { usePopularSeries } from "./usePopularSeries"; // Hook personalizado para series
import { MovieCard } from "./MovieCard"; // Puedes renombrar este componente a algo más genérico como "MediaCard" si lo usarás para películas y series
import "../styles/moviesView.css";
import { Link } from "react-router-dom";

export function Series() {
  const { series, isLoading, isError } = usePopularSeries();

  if (isError) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading...</div>;

  const seriesInfo = series[0];

  const backgroundImage = `https://image.tmdb.org/t/p/w500${seriesInfo.backdrop_path}`;

  const findYear = seriesInfo.first_air_date.split("-"); // Cambiado a 'first_air_date' para series

  function shortSeriesYear(findYear) {
    return findYear[0];
  }

  console.log(series);
  console.log(seriesInfo);

  return (
    <>
      {/* Sección de encabezado con la serie destacada */}
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
            src={`https://image.tmdb.org/t/p/w500${seriesInfo.poster_path}`}
            alt="Poster"
          />
          <div className="flex flex-col gap-4">
            <h4 className="title-movie">{seriesInfo.name}</h4>
            <h5 className="movieYear">{shortSeriesYear(findYear)}</h5>
            <p className="contentInfo-movie font-light">
              {seriesInfo.overview}
            </p>
            <Link
              className="bg-blue-700 px-8 py-3 w-fit rounded-full text-white font-bold"
              to={`/series/${seriesInfo.id}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      {/* Sección principal con el menú lateral (SeriesLateralMenu) y la lista de series populares */}
      <section className="section-movies">
        <div className="movies-listViewer">
          <div className="movies-container">
            <h4 className="text-slate-300 text-2xl font-bold">
              POPULAR SERIES
            </h4>
            <ul className="ul-container">
              {series.slice(1).map((seriesData) => (
                <li key={seriesData.id}>
                  <Link to={`/series/${seriesData.id}`}>
                    <MovieCard movieData={seriesData} />
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
