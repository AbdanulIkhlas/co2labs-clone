import React from "react";

const ButtonCustom = ({children}) => {
  return <button
    className="font-generalSans bg-secondary cursor-pointer  text-main rounded-md text-md w-max px-5 py-2
          hover:scale-110 hover:shadow-md hover:shadow-secondary transition-all "
  >
    {children}
  </button>;
};

export default ButtonCustom;
