import React from "react";
import Rating from "../rating/Rating";
import "./style.css";
import dayjs from "dayjs";
import CardSkelton from "./cardSKL";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/no-poster.png";
import Img from "../lazyLoadImage/Img";
const MovieCard = ({ movie, loading, endpoint }) => {
  if (loading) {
    return <CardSkelton />;
  }
  const { genre } = useSelector((state) => state.movie);
  return (
    <div className="w-full max-w-sm  mx-auto  rounded-lg shadow dark movieCard ">
      <div className="movieImg text-center relative aspect-[1/1.5] overflow-hidden">
        <Link to={`/${endpoint}/${movie.id}`} className="flex h-full">
          {/* <img
            className="  rounded-lg mx-auto object-cover w-full h-full object-center  hover:brightness-50"
            src={
              movie?.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                : avatar
            }
            alt="product image"
          /> */}
          <Img
            // alt="product image"
            className="rounded-lg  mx-auto object-cover w-full h-full object-center  hover:brightness-50"
            src={
              movie?.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
                : avatar
            }
          />
        </Link>
        <div className="flex items-center justify-between mx-1 z-20 ">
          <div className="absolute left-2 bottom-2 z-10">
            <Rating
              rating={movie?.vote_average !== 0 ? movie?.vote_average : "0.0"}
              width={50}
            />
          </div>
          <div className="flex items-center  absolute top-4 left-1 z-10 flex-wrap gap-1">
            {movie?.genre_ids?.slice(0, 2)?.map((g) => {
              if (!genre[g]?.name) return;
              return (
                <p
                  key={g}
                  className=" px-4 py-1 text-[12px] bg-hover text-white rounded-lg  capitalize "
                >
                  {genre[g]?.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-5 py-2  text-center">
        <span className="text-xl font-semibold tracking-tight  text-white line-clamp-1">
          {movie?.original_title}
        </span>
        <span className="text-gray-500 font-semibold tracking-tight">
          {" "}
          {movie.release_date !== "" &&
            dayjs(movie.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
