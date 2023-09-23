import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import MovieCard from '../movieCard/MovieCard';
const Slider = ({data ,loading,endpoint}) => {

  return (
    <>
    <Swiper
      slidesPerView={2}
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
          slidesPerView: 2,
          spaceBetween: 10,
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
                    <MovieCard movie={item } loading={loading} endpoint={endpoint}/>
                </SwiperSlide>
            ))
        }

    </Swiper>
  </>
  )
}

export default Slider