import "../styles/header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <section className="header-container">
      <div className="flex flex-row gap-8 items-center">
        <Link to={"/"}>
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
        <button>Series</button>
        <button>Movies</button>
      </div>
    </section>
  );
}
