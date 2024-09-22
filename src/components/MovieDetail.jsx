import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/movieDetails.css";

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [videos, setVideos] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  function shortMovieDate(releaseDate) {
    if (!releaseDate) return "";
    const editDate = releaseDate.split("-");
    const yearMovie = editDate[0];

    return yearMovie;
  }

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        const movieData = await movieResponse.json();
        setMovie(movieData);
        setIsLoading(false);
        console.log(movieData);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      }
    }

    async function fetchMovieVideos() {
      try {
        const videosResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
        );
        const videosData = await videosResponse.json();
        setVideos(videosData.results);
      } catch (error) {
        console.error("Error loading videos:", error);
      }
    }

    fetchMovieDetails();
    fetchMovieVideos();
  }, [id, API_KEY]);

  if (isError) return <div>Error loading movie details.</div>;
  if (isLoading) return <div>Loading...</div>;
  const backgroundImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  const score_number = Math.floor(movie.vote_average * 10);

  return (
    <>
      <section
        className="movieDetails-section relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Contenido principal */}
        <div className="info-container">
          <img
            className="h-[580px] rounded-xl"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="flex flex-col gap-4">
            <h5 className="movieYear">{shortMovieDate(movie.release_date)}</h5>
            <h1 className="text-white font-bold text-7xl drop-shadow-lg pb-2">
              {movie.title}
            </h1>
            <ul className="genre-list">
              {movie.genres.map((genre) => {
                return (
                  <li className="genre-name" key={genre.id}>
                    {genre.name}
                  </li>
                );
              })}
            </ul>
            <h4 className=" text-slate-300 text-2xl font-bold">OVERVIEW</h4>

            <p className="text-white font-light text-xl drop-shadow-lg">
              {movie.overview}
            </p>
            <div className="flex flex-row gap-12 items-start">
              <div className="flex flex-col gap-4 items-start">
                <h4 className=" text-slate-300 text-2xl font-bold">
                  USER SCORE
                </h4>
                <span className=" bg-slate-300 w-10 h-10 p-9 flex items-center justify-center rounded-full text-xl font-bold">
                  {score_number}%
                </span>
              </div>
            </div>
            <a
              className="bg-blue-700 px-8 py-3 w-fit rounded-full text-white font-bold"
              href={movie.homepage}
              target="_blank"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Sección de videos */}
        <div className="videos-section pb-8">
          <h2 className="w-2/3 text-white font-bold text-6xl leading-tight drop-shadow-lg">
            Watch NOW the trailer or related video!
          </h2>
          {videos.length > 0 ? (
            <div className="video-container w-1/2 h-80 rounded-xl">
              {videos
                .filter((video) => video.type === "Trailer")
                .slice(0)
                .map((video) => (
                  <iframe
                    key={video.id}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ))}
            </div>
          ) : (
            <p>No videos available for this movie.</p>
          )}
        </div>

        {/* Sección de productores */}
        <div className="productor-section relative">
          <div className="productor-logo-container">
            {movie.production_companies.map((productionCompany) => {
              return productionCompany.logo_path ? (
                <img
                  key={productionCompany.id}
                  src={`https://image.tmdb.org/t/p/w500${productionCompany.logo_path}`}
                  alt={productionCompany.name}
                  className="logo-productor"
                />
              ) : null;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
