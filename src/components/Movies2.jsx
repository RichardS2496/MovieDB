import { Routes, Route } from "react-router-dom";
import { MoviesView } from "./Movies";
import { TopRatedMovies } from "./TopRatedMovies";
import { MoviesLateralMenu } from "./MoviesLateralMenu";

function Movies() {
  return (
    <div className="movies-page-layout">
      <MoviesLateralMenu />

      <div className="content">
        <Routes>
          <Route path="popular" element={<MoviesView />} />
          <Route path="top-rated" element={<TopRatedMovies />} />
        </Routes>
      </div>
    </div>
  );
}

export default Movies;
