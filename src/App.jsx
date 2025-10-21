// ---
import Header from "./Componentes/Header.jsx";
import Filters from './Componentes/filters.jsx';
import CardConteiner from './Componentes/CardConteiner.jsx';
import { useState } from "react";
// ---

// md: tablet
// xl: computadoras

// Stack:
// REACK
// TAILWIND CSS
// VITE 
// JAVASCRIPT

function App() {

  const [filtersEstado, setFilterEstado] = useState('All') //All - Active - Inactive
  
  // console.log('Filtro Actual: ', filtersEstado)

  // Nnecesito pasar un estado ya sea ALL ACTIVE INACTIVE DE FILTERS. PARA HACER ESTO 
  // ES MEJOR HACERLO DONDE TENGO LOS COMPONENTES YA PUESTOS
  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
        <Header />
        <Filters filtersEstado={filtersEstado} filtroValor={setFilterEstado}/>
        <CardConteiner filtersEstado={filtersEstado}/>
      </section>
    </main>
  );
}

export default App;
