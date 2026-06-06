import React from "react";

const Modal = ({ Handleclick }) => {
  return (
    <div className=" fixed inset-0  z-[100] min-w-[100vw] min-h-[100vh] bg-black/80 backdrop-blur-sm">
      <div
        onClick={(e) => Handleclick()}
        className="flex justify-center  items-center min-h-full p-4"
      >
        <div className="relative shadow-2xl w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden border border-white/10">
          <button 
            onClick={Handleclick}
            className="absolute top-4 right-4 text-white hover:text-primary z-20 text-2xl"
          >
            ×
          </button>
          <iframe
            className="w-full h-full"
            src=""
            frameBorder={0}
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
