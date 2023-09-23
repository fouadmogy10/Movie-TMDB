import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  OfficialVideos,
  crew_cast,
  getMovieDetails,
  getreco,
} from "../../features/movie/movieSlice";
import DetailsLoader from "../../components/detailsSkl/MovieDSkl";

import "./style.css";
import CastSlider from "../../components/slider/castSlider";
import Details from "./Details";
import Slider from "../../components/slider/Slider";
import VideoSlider from "../../components/slider/VideoSlider";
import Meta from "../../components/Meta";
const MovieDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    movieDetail,
    isLoading,
    recommendations,
    OfficialVideos: OF,
    crew_cast: CC,
    isError,
  } = useSelector((state) => state.movie);
  const { id, type } = useParams();
  useEffect(() => {
    window.scroll(0, 0);
    fetch();
  }, [id]);

  useEffect(() => {
    if (movieDetail?.response?.status == 404) {
      navigate("/notfound");
    }
  }, [movieDetail, isError, isLoading, dispatch]);

  const fetch = async () => {
    await dispatch(getMovieDetails({ id, type }));
    dispatch(getreco({ id, type }));
    dispatch(OfficialVideos({ id, type }));
    dispatch(crew_cast({ id, type }));
  };
  return (
    <section className="details">
       <Meta title={`${movieDetail?.title? movieDetail?.title: "Movie Id => id"}`} desc={`${movieDetail?.overview}`}/>
      {isLoading ? (
        <div className="container pt-[100px]">
          <DetailsLoader />
        </div>
      ) : (
        <Details
          movieDetail={movieDetail}
          videoId={OF?.data[0] ? OF?.data[0]?.key : ""}
        />
      )}
      <div className="container">
          <div className="my-10 castSlider">
            <h2 className="text-2xl text-white font-semibold mb-10">
              Top Cast
            </h2>
            <CastSlider
              data={CC?.data?.cast ? CC?.data?.cast : [1, 2, 3, 4, 5]}
              loading={CC.isLoading}
            />
          </div>
          <div className="my-10 VideoSlider">
            <h2 className="text-2xl text-white font-semibold mb-10">
              Official Videos
            </h2>
            <VideoSlider
              data={OF?.data ? OF?.data : [1, 2, 3, 4, 5]}
              loading={CC.isLoading}
            />
          </div>
          <div className="my-10 ">
            <h2 className="text-2xl text-white font-semibold mb-10">
              Recommendations
            </h2>
            <Slider
              data={
                recommendations?.data ? recommendations?.data : [1, 2, 3, 4, 5]
              }
              loading={recommendations?.isLoading}
              endpoint={type}
            />
          </div>
      </div>
    </section>
  );
};

export default MovieDetails;
