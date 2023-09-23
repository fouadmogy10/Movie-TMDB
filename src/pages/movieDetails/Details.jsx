import React from 'react'
import { BiPlayCircle } from "react-icons/bi";
import dayjs from "dayjs";
import Rating from "../../components/rating/Rating";
import avatar from "../../assets/img/no-poster.png"
import Modal from '../../components/Modal/Modal';
const Details = ({movieDetail,videoId}) => {
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
      };
  return (
    <div
          className={` md:flex items-start justify-center pt-[100px] container overflow-hidden`}
        >
          <div className="absolute top-0 left-0 w-full h-[100%] opacity-10 z-10  ">
            <img
              src={movieDetail?.backdrop_path? `https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`:avatar}
              className="object-cover object-center w-full h-full"
              alt=""
            />
          </div>
          <div className="xl:w-2/6 lg:w-2/5 md:w-5/12  w-full md:block z-20">
            <img
              className="w-full aspect-[1/1.5] object-cover rounded-3xl"
              alt="img of a girl posing"
              src={movieDetail?.backdrop_path? `https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`:avatar}
            />
          </div>

          <div className="xl:w-4/6 md:w-7/12 lg:ml-8 md:ml-6 md:mt-0 mt-6 text-white z-20">
            <h2 className="capitalize text-3xl font-semibold lg:mt-20">{`${
              movieDetail.name || movieDetail.title
            } (${dayjs(movieDetail?.release_date).format("YYYY")})`}</h2>
            <div className="  italic  text-[20px] opacity-50">
              {movieDetail.tagline}
            </div>
            <div className="md:flex items-center my-5">
              {movieDetail?.genres?.map((g) => {
                return (
                  <p
                    key={g.id}
                    className=" px-4 py-1 text-[12px] bg-hover text-white rounded-lg mr-1 capitalize md:mb-0 mb-2"
                  >
                    {g?.name}
                  </p>
                );
              })}
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <Rating rating={movieDetail?.vote_average} width={"50"} />
              </div>
              <div className="flex items-center   transition-all duration-300 cursor-pointer">
                
                <Modal title={"Watch Trailer"} ID={videoId}/>
              </div>
            </div>
            <div className="my-5">
              <div className="text-[24px]">Overview</div>
              <div className=" lg:pr-[100px]">{movieDetail.overview}</div>
            </div>
            <div className="info">
              {movieDetail.status && (
                <div className="infoItem">
                  <span className="text bold">Status: </span>
                  <span className="text">{movieDetail.status}</span>
                </div>
              )}
              {movieDetail.release_date && (
                <div className="infoItem">
                  <span className="text bold">Release Date: </span>
                  <span className="text">
                    {dayjs(movieDetail.release_date).format("MMM D, YYYY")}
                  </span>
                </div>
              )}
              {movieDetail.runtime && (
                <div className="infoItem">
                  <span className="text bold">Runtime: </span>
                  <span className="text">
                    {toHoursAndMinutes(movieDetail.runtime)}
                  </span>
                </div>
              )}
            </div>

            {movieDetail?.created_by?.length > 0 && (
              <div className="info">
                <span className="text bold">Creator: </span>
                <span className="text">
                  {movieDetail?.created_by?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {movieDetail?.created_by.length - 1 !== i && ", "}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
  )
}

export default Details