// ---
import React, { useState } from "react";
import Card from "./Card";
import Datos from "../../data.json";


// ---
function CardConteiner({filtersEstado}) {
  
  const [Extensions, setExtensions] = useState(Datos) 

  let filtersExtension = []

  if(filtersEstado === 'Inactive'){
    filtersExtension = Extensions.filter(Extensions => !Extensions.isActive);
  }else if(filtersEstado === 'Active'){
    filtersExtension = Extensions.filter(Extensions => Extensions.isActive);
  }else{
    filtersExtension =  Extensions
  }

  return (
    <div className="flex flex-col gap-3 md:grid md:grid-cols-2 xl:grid-cols-3">
      {filtersExtension.map((item) => (
        <Card
          key={item.name}
          {...item}
          Extensions = {Extensions}
          setExtensions = {setExtensions}
        />
      ))}
    </div>
  );
}

export default CardConteiner;
