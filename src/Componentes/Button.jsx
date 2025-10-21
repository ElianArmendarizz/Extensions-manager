import React from "react";

function Button({ children, textSmall, handleClik , active }) {
  return (
    <button onClick={handleClik}
      className={`border border-Neutral-200 bg-Neutral-0 px-5 py-2 rounded-full hover:bg-Red-500 hover:text-neutral-50 cursor-pointer 
    
    dark:text-neutral-50 
    dark:bg-Neutral-800 
    dark:border-Neutral-200
    dark:hover:bg-red-500 
    dark:hover:text-Neutral-900
    ${active ? "dark:bg-Red-500 bg-Red-500 text-white" : "dark:bg-Neutral-800 "  }


    ${textSmall ? "text-base" : "text-[1.25rem]"}`}
    >
      {children}
    </button>
  );
}

export default Button;
