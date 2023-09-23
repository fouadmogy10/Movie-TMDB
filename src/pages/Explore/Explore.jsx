import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PaginationComponent from "../../components/Pagnation/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { explore } from "../../features/movie/movieSlice";
import MovieList from "../../components/movieList/movieList";
import Meta from "../../components/Meta";

const Explore = () => {
  const { mediaType } = useParams();
  const dispatch = useDispatch();
  const [Sort, setSort] = useState("")
  const { explore: ex } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(explore({ mediaType, page: 1 ,sort:Sort}));
  }, [mediaType,Sort]);

  const sortbyData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    {
        value: "primary_release_date.desc",
        label: "Release Date Descending",
    },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];


  return (
  <>
  <Meta title={"Explore Page"} desc={"A sensual adventure up the Sea to Sky gondola in Squamish, BC. Plot summary · Add synopsis. Genre. Adventure. Parents guide."}/>
    <div className="min-h-screen  flex items-center justify-center pt-[100px]">
      <div className="heeader py-5 w-full container">
        <div className="md:flex flex-row md:justify-between justify-center items-center my-4">
          <h2 className="md:text-3xl text-2xl font-semibold text-white mb-5">
            Explore TV Shows
          </h2>
          <select
            className="select select-bordered w-full md:max-w-xs"
            defaultValue={"popularity.desc"}
            onChange={(e)=>setSort(e.target.value)
            }
          >
            {
                sortbyData.map(item=>(

                    <option value={item.value} key={item.value}>{item.label}</option>
                ))
            }
          </select>
        </div>
        <MovieList
          data={
            ex?.data?.results ? ex?.data?.results : [1, 2, 3, 4, 5, 6, 2, 1]
          }
          loading={ex.isLoading}
          endPoint={mediaType}
        />
        
          <PaginationComponent  sort={Sort}/>
      </div>
    </div>
  </>
  );
};

export default Explore;
