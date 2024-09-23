import "../styles/header.css";
import { Link } from "react-router-dom";
import { Movies } from "./Movies";
import { Series } from "./Series";

export function Header() {
  return (
    <section className="header-container">
      <div className="flex flex-row gap-8 items-center">
        <Link to={"/movies"}>
          <img
            className="w-[100px]"
            src="http://runmydev.com/wp-content/uploads/2024/09/logo.png"
            alt=""
          />
        </Link>

        <form action="">
          <input type="text" placeholder="Search" />
          <button></button>
        </form>
      </div>

      <div className="flex flex-row gap-4">
        <nav>
          <Link to="/movies" element={<Movies />}>
            Movies
          </Link>
          <Link to="/series" element={<Series />}>
            Series
          </Link>
        </nav>
      </div>
    </section>
  );
}
