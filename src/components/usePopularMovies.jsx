import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
    },
  }).then((res) => res.json());

export function usePopularMovies() {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/popular",
    fetcher
  );

  return {
    movies: data?.results || [],
    isLoading: !error && !data,
    isError: error,
  };
}
