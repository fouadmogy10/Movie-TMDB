import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
    }
};

  return (
    <section className='min-h-screen main flex items-center justify-center ' >
            <div className='text-white text-center'>
                <h1 className='md:text-[90px] text-[50px] font-extrabold md:-mb-6 -mb-4 '>Welcome.</h1>
                <p className='md:text-[24px] text-[18px]  mb-[40px] font-semibold'>Millions of movies, TV shows and people to discover. Explore now.</p>
                <div className="searchInput ">
                        <input
                        className='rounded-s-full text-black'
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button type='submit' className='button'>Search</button>
                    </div>
            </div>
    </section>
  )
}

export default HeroSection