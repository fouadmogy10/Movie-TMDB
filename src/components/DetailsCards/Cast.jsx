import React from 'react'
import profile from "../../assets/img/avatar.png"
import CastLoader from './castSkl'
const Cast = ({loading,cast}) => {
    if (loading) {
        return <CastLoader/>
    }
  return (
    <div className="block text-center rounded-lg bg-transparent  ">
    <div className="relative mx-auto overflow-hidden bg-cover text-center bg-no-repeat w-[125px] h-[125px] md:w-[175px] md:h-[175px] rounded-full">
      <img
        className="rounded-full object-cover  object-[center top]"
        src={ cast?.profile_path? `https://image.tmdb.org/t/p/original${cast?.profile_path}` :profile}
        alt=""
      />
    </div>
    <div className="p-6">
      <p className=" text-white font-bold md:text-xl text-[16px]">
       {cast?.name}
      </p>
      <p className="text-base text-neutral-400  font-bold text-[16px]">
       {cast?.character}
      </p>
    </div>
  </div>
  )
}

export default Cast