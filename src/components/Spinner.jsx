import React from "react";
import { BeatLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="text-center block w-full py-[50px] ">
      <BeatLoader color="#36d7b7" />
    </div>
  );
};

export default Spinner;
