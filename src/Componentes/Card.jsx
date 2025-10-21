// ---
import { Toggle } from "rsuite";
import "rsuite/Toggle/styles/index.css";

import Button from "./Button";
// ---
function Card({ logo, name, description, isActive, setExtensions, Extensions }) {
  
  const onToggle = function(){
  
  const newExtensions = Extensions.map(extension => {
    if (extension.name === name) {
      return { ...extension, isActive: !extension.isActive };
    }
    return extension;
  });
  setExtensions(newExtensions);
  }

  const onRemove = function(){
    setExtensions( prevExtensions => prevExtensions.filter( 
        extension => extension.name !== name 
      )
    )
  }

  return (
    <div className="bg-Neutral-0 rounded-lg p-4 shadow-sm dark:bg-Neutral-800 dark:text-Neutral-0">

      <div className="flex gap-4 items-start mb-7">
        <img src={logo} alt="Logo" />
        <div className="">
          <h2 className="font-bold text-[1.25rem] mb-2">{name}</h2>
          <p className="text-Neutral-600 text-[.9375rem] dark:text-Neutral-300">{description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Button handleClik={onRemove} textSmall={true}>Remove</Button>
        <Toggle onClick={onToggle} checked={isActive} color="red" />
      </div>

    </div>
  );
}

export default Card;
