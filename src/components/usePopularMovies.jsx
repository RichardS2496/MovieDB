import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjNjZWY5ODk3NmIwNWE3NTNkYWRiNzY5OTk3YjZjMiIsIm5iZiI6MTcyNjk5MzU1NS44NDM0Miwic3ViIjoiNjVmOTY0NDkzM2EzNzYwMTg0MzZkZDA0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.rDpcOn6p04i_F_M0F5l9S7tFwT840WiJVMGhkDJXxzU`,
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
