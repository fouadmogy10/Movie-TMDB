import React from "react";
import { BiPlayCircle } from "react-icons/bi";
const Modal = ({ID,title}) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div
        className=" flex items-center hover:text-hover transition-all duration-500 "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <BiPlayCircle size={60} />
       {title !== "" && <p>
            {title}
        </p>}
      </div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-transparent  w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className=" bg-hover  rounded-full  w-[25px] h-[25px] text-center  absolute right-2 top-2">
              ✕
            </button>
          </form>
         
          <iframe width="100%" height="400px" src={`https://www.youtube.com/embed/${ID}`}  frameBorder="0" allowFullScreen></iframe>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
