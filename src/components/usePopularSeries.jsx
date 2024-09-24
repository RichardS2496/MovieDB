import useSWR from "swr";

// Función fetcher para la API de TMDb
const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`, // Token desde las variables de entorno
    },
  }).then((res) => res.json());

// Hook para obtener las series populares
export function usePopularSeries() {
  // Asegúrate de que el token esté presente
  if (!import.meta.env.VITE_BEARER_TOKEN) {
    console.error("El token de autorización no está definido.");
  }

  // Llamada a la API de TMDb para obtener las series populares
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", // URL correcta para series populares
    fetcher
  );

  return {
    series: data?.results || [], // Devuelve las series si están presentes
    isLoading: !error && !data, // Indica si aún está cargando
    isError: error, // Manejamos el posible error
  };
}
