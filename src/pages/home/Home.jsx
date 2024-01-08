import React from "react";
import HeroSection from "./HeroSection";
import Popular from "./Popular";
import Trending from "./Treding";
import TopRated from "./TopRated";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetDetails } from "../../features/movie/movieSlice";
import Meta from "../../components/Meta";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetDetails());
  }, []);

  return (
    <>
      <Meta
        title={"Home Page"}
        desc={"Movie Streaming Site In 2023: Watch Movies And TV"}
      />
      <HeroSection />
      <Popular />
      <Trending />
      <TopRated />
    </>
  );
};

export default Home;
