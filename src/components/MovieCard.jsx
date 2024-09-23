export function MovieCard({ movieData }) {
  if (!movieData) return null;

  const findYear = movieData.release_date.split("-");

  function shortMovieYear(findYear) {
    return findYear[0];
  }

  return (
    <article className="relative rounded-2xl overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-t from-blue-900/100 to-transparent p-4 opacity-0 hover:opacity-100 cursor-pointer gap-2 flex flex-col items-start justify-end transition-opacity duration-300">
        <span className="bg-white font-bold text-blue-900 rounded-full px-2">
          {shortMovieYear(findYear)}
        </span>
        <h2
          className=" text-white font-bold text-xl drop-shadow-2xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          {movieData.title}
        </h2>
      </div>
      <img
        className="poster-img"
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={movieData.title}
      />
    </article>
  );
}
