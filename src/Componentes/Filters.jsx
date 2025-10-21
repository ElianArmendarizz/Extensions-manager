import React from "react";
import Button from "./Button";



function filters({filtersEstado,filtroValor}) {

    const handleClik = function(evento){
    filtroValor(evento.target.textContent)
  }



  return (
    <div className="mb-6 md:flex justify-between md:items-center ">
      <h2 className="dark:text-Neutral-0 text-center text-[2.125rem] font-bold mb-6 md:mb-0">Extensions List</h2>
      <div className="flex justify-center items-center">
        <div className="flex gap-4 ">
          <Button active={filtersEstado === 'All'} handleClik={handleClik}>All</Button>
          <Button active={filtersEstado === 'Active'} handleClik={handleClik}>Active</Button>
          <Button active={filtersEstado === 'Inactive'} handleClik={handleClik}>Inactive</Button>
        </div>
      </div>
    </div>
  );
}

export default filters;
