import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/movieDetails.css";

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=323cef98976b05a753dadb769997b6c2`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=323cef98976b05a753dadb769997b6c2`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.results);
      })
      .catch((error) => {
        console.error("Error loading videos:", error);
      });
  }, [id]);

  if (isError) return <div>Error loading movie details.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="movieDetails-section">
      <div className="info-container">
        <img
          className="h-[420px]"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>

      <div className="videos-section">
        <h2>Trailers & Videos</h2>
        {videos.length > 0 ? (
          <div className="video-container">
            {videos
              .filter((video) => video.type === "Trailer")
              .slice(0, 1)
              .map((video) => (
                <iframe
                  key={video.id}
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  width="560"
                  height="315"
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
    </section>
  );
}
