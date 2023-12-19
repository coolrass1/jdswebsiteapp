import React from "react";

const Modal = ({ Handleclick }) => {
  return (
    <div className=" fixed inset-0  z-5 min-w-[100vw] min-h-[100vh] bg-black/80 ">
      <div
        onClick={(e) => Handleclick()}
        className="flex justify-center  items-center min-h-full"
      >
        <div className="shadow-sm w-10/12 h-[300px] md:h-[500px] md:w-[500px]  bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/hEnr6Ewpu_U?autoplay=1&mute=1"
            frameBorder={100}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
