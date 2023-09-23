import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { explore } from "../../features/movie/movieSlice";

const PaginationComponent = ({ sort, page }) => {
  const [pageCount, setpageCount] = useState(2);
  const { mediaType } = useParams();
  const dispatch = useDispatch();
  //   const pages = useSelector((state) => state.MovieCount);
  const { explore: ex } = useSelector((state) => state.movie);
  let PC = useEffect(() => {
    page ? setpageCount(page) : setpageCount(200);
  }, []);

  const handlePageClick = (data) => {
    // dispatch(getPage(data.selected + 1));
    dispatch(explore({ mediaType, page: data.selected + 1, sort }));
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={
          "flex h-8 font-medium rounded-full bg-gray-700 max-w-min mx-auto"
        }
        pageClassName={"paginationStyle  "}
        pageLinkClassName={"paginationStyle  "}
        previousClassName={"paginationStyle   "}
        nextClassName={"paginationStyle   "}
        previousLinkClassName={
          "paginateBTN"
        }
        nextLinkClassName={
          "paginateBTN"
        }
        breakClassName={"paginationStyle "}
        breakLinkClassName={"paginationStyle  "}
        activeClassName={"paginationStyle bg-pink-600 text-white "}
        activeLinkClassName={"paginationStyle bg-pink-600 text-white "}
      />
    </>
  );
};

export default PaginationComponent;
