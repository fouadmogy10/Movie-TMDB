import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Cast from '../DetailsCards/Cast';
import VideoCard from '../DetailsCards/VideoCard';
const VideoSlider = ({data ,loading}) => {
  return (

    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      loopedSlides={2}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        reverseDirection: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper my-3"
    >

        {
            data.map((item,idx)=>(
                
                <SwiperSlide key={idx} className=' rounded-2xl '>
                    <VideoCard video={item } loading={loading}/>
                </SwiperSlide>
            ))
        }
      

    </Swiper>
  </>
  )
}

export default VideoSlider