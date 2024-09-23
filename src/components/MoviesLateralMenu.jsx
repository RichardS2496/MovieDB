import { Link } from "react-router-dom";
import "../styles/moviesView.css";

export function MoviesLateralMenu() {
  return (
    <ul className="sidebarMovies bg-slate-900 w-1/3 p-4 rounded-xl h-fit">
      <li>
        <Link to={"/popular"}>Popular Movies</Link>
      </li>
      <li>
        <Link>Top Rated</Link>
      </li>
      <li>
        <Link>Upcoming</Link>
      </li>
    </ul>
  );
}
