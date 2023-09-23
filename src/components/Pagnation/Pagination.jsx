import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { explore } from "../../features/movie/movieSlice";

const PaginationComponent = ({sort,page}) => {
  const [pageCount, setpageCount] = useState(2);
  const{mediaType}=useParams()
  const dispatch = useDispatch();
//   const pages = useSelector((state) => state.MovieCount);
const {explore:ex} =useSelector(state =>state.movie)
let PC = 
  useEffect(() => {
    page? setpageCount(page): setpageCount(200)
  }, []);

  const handlePageClick = (data) => {
    // dispatch(getPage(data.selected + 1));
    dispatch(explore({mediaType,page:data.selected + 1,sort}))
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="Prev"
      containerClassName={"join"}
      pageClassName={"join-item "}
      pageLinkClassName={"join-item btn"}
      previousClassName={"join-item  "}
      nextClassName={"join-item  "}
      previousLinkClassName={"join-item btn btn-outline"}
      nextLinkClassName={"join-item btn btn-outline"}
      breakClassName={"join-item btn btn-disabled"}
      breakLinkClassName={"join-item text-white "}
      activeClassName={"join-item btn-active "}
      activeLinkClassName={"join-item btn-active "}
    />
  );
};

export default PaginationComponent;
