import "../styles/header.css";

export function Header() {
  return (
    <section className="header-container">
      <div className="flex flex-row gap-8">
        <h4>LOGO</h4>
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
