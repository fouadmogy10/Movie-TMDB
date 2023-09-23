import React from 'react'
import MovieCard from '../movieCard/MovieCard';

const MovieList = ({data,loading,endPoint}) => {
  return (
    <div
        
    className="container m-auto w-full grid lg:grid-cols-5   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
     {
        data.map((item,idx)=>{
            return(
                <MovieCard key={idx}  movie={item} loading={loading} endpoint={endPoint}/>
            )
        })
     }
    </div>
  )
}

export default MovieList