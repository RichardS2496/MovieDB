import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjNjZWY5ODk3NmIwNWE3NTNkYWRiNzY5OTk3YjZjMiIsIm5iZiI6MTcyNTY5NjE1OC42MDMwMTEsInN1YiI6IjY1Zjk2NDQ5MzNhMzc2MDE4NDM2ZGQwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pAKxyUm_EcIgUhI4oa2kxIkRu0u76l8IOxNVgbxxsKg",
    },
  }).then((res) => res.json());

export function usePopularMovies() {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/popular",
    fetcher
  );

  return {
    movies: data?.results,
    isLoading: !error && !data,
    isError: error,
  };
}
