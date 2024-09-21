import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainHero } from "./components/MainHero";
import { MovieDetail } from "./components/MovieDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainHero />} />
        <Route path="/movie/:id" element={<MovieDetail />} />{" "}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
