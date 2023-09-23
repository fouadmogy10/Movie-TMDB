import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/Spinner.jsx";
import MovieCard from "../../components/movieCard/MovieCard.jsx";
import SearchHook from "../../hooks/SearchHook/SearchHook.js";
import Meta from "../../components/Meta.jsx";

const SearchPage = () => {
  const [data, pageNum, loading, query, fetchInitialData, fetchNextPageData] =SearchHook();

  return (
    <div className="min-h-screen  pt-[100px]">
      <Meta title={`Search Page`} desc={`result of ${query}`}/>
      <div className="heeader py-5 w-full container">
        <h2 className=" md:text-3xl text-2xl font-semibold text-white mb-5">
          {`Search ${
            data?.total_results > 1 ? "results" : "result"
          } of '${query}'`}
        </h2>
        {loading && <Spinner />}

        {!loading ? (
          <InfiniteScroll
            className="container m-auto w-full grid lg:grid-cols-5   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5"
            dataLength={data?.results?.length || []}
            next={fetchNextPageData}
            hasMore={pageNum <= data?.total_pages}
            loader={<Spinner />}
          >
            {data?.results.map((item, index) => {
              if (item.media_type === "person") return;
              return (
                <MovieCard
                  key={index}
                  movie={item}
                  // loading={loading}
                  endpoint={item.media_type}
                />
              );
            })}
          </InfiniteScroll>
        ) : (
          <span className="resultNotFound">Sorry, Results not found!</span>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
