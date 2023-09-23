import React, { useState } from "react";
import SwitchTabs from "../../components/switchTap/SwitchTap";
import Slider from "../../components/slider/Slider";
import useFetch from "../../hooks/UseFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="w-[95%] mx-auto md:container py-5 ">
      <div className="flex items-center justify-between">
        <span className="text-white text-[24px] font-bold">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <Slider data={data?.results ? data?.results :  [1,2,3,4,5]} loading={loading} endpoint={"movie"}/>
    </div>
  );
};

export default Trending;
