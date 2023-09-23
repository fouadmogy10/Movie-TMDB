import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/baseURL.jsx";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { getGenres } from "./features/movie/movieSlice";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Explore from "./pages/Explore/Explore";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage/SearchPage";
function App() {
  const dispatch = useDispatch();

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };
  useEffect(() => {
    genresCall();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:query" element={<SearchPage/>} />
        <Route path="/:type/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
