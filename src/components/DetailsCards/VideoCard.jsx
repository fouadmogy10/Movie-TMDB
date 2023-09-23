import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import Vloader from "./Vloader";
const VideoCard = ({ loading, video }) => {
  if (loading) {
    return <Vloader />;
  }
  return (
    <>
      <div className="block text-center rounded-lg bg-transparent  ">
        <div className="relative mx-auto overflow-hidden bg-cover text-center bg-no-repeat   rounded-3xl">
          <img
            className="rounded-3xl object-cover  object-[center top] brightness-50 relative"
            src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`}
            alt=""
          />

          <a
            href={`https://www.youtube.com/embed/${video?.key}`}
            className="absolute text-white hover:text-hover transition-all duration-500  z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            target="_blank"
          >
            <BiPlayCircle size={60} />
          </a>
        </div>
        <div className="p-6">
          <p className=" text-white font-bold md:text-xl text-[16px]">
            {video?.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
