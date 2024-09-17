import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
        setIsError(true);
        setIsLoading(false);
      });
  }, [id]);

  if (isError) return <div>Error loading movie details.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}
