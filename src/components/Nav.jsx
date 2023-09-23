import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import logo from "../assets/img/movix-logo.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  let [open, setOpen] = useState(false);
  let [search, setSearch] = useState(false);
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setSearch(false);
      }, 1000);
    }
  };
  return (
    <div className="shadow-md w-full fixed  top-0 left-0 z-[999] backdrop-blur-[3.5px]">
      <div
        className={`md:flex items-center justify-between  py-4 md:px-10 px-7 z-[999] ${
          open ? "bg-primary" : ""
        }`}
      >
        <div
          className="font-bold text-2xl  flex items-center font-[Poppins] 
  text-gray-800"
        >
          <Link to={"/"}>
            <img
              loading="lazy"
              src={logo}
              alt="logo"
              width={129}
              height={29}
              className="m-0 w-[129px] h-[29px] z-[999] cursor-pointer"
            />
          </Link>
        </div>

        <div className=" absolute right-8 top-6 cursor-pointer md:hidden flex items-center">
          <AiOutlineSearch
            color="white "
            className="mx-2"
            onClick={() => {
              setSearch(!search);
              setOpen(false);
            }}
          />
          <FaBars
            color="white"
            className="z-[999] sticky"
            onClick={() => {
              setOpen(!open);
              setSearch(false);
            }}
          />
        </div>

        <ul
          className={`md:flex lg:justify-center md:items-center md:pb-0 pb-12 absolute md:static bg-primary  md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14 " : "top-[-490px] "
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              to={"/explore/movie"}
              className="text-white hover:text-hover duration-500"
              onClick={() => setOpen(false)}
            >
              Movies
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              to={"/explore/tv"}
              className="text-white hover:text-hover duration-500"
              onClick={() => setOpen(false)}
            >
              TV Shows
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <AiOutlineSearch
              cursor={"pointer"}
              size={25}
              onClick={() => {
                setSearch(!search);
                setOpen(false);
              }}
              className=" text-white hover:text-hover   duration-500 hidden md:block"
            />
          </li>
        </ul>
        <div
          className={`md:flex lg:justify-center items-center text-center py-5 absolute  bg-transparent   md:z-auto w-full  z-[-1] left-0  transition-all duration-500 ease-in ${
            search ? "top-14 " : "top-[-490px] "
          }`}
        >
          <div className="relative w-[90%] mx-auto">
            <input
              className="w-full rounded-full text-black pl-10 font-semibold "
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <AiOutlineCloseCircle
              className="top-[13px] right-[13px] absolute"
              cursor={"pointer"}
              size={18}
              onClick={() => {
                setSearch(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
