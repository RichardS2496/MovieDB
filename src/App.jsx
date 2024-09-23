import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Movies } from "./components/Movies";
import { Series } from "./components/Series";
import { MovieDetail } from "./components/MovieDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
