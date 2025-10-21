// ---
import logo from '../../public/assets/images/logo.svg';
import LogoDark from '../../public/assets/images/logo-dark.svg';
import IconSun from '../../public/assets/images/icon-sun.svg';
import IconMoon from '../../public/assets/images/icon-moon.svg'
import { useState } from 'react';

// ---


function Header() {
    // CONSULTAR TEMA GUARDADO EN LOCALSTORAGE
    // Obtenemos el valor almacenado con la clave 'dark' del localStorage con .getItem
    const saveTheme = localStorage.getItem('dark')
    
    // APLICAR TEMA AL CARGAR LA PÁGINA
    // Si existe un tema guardado y es 'true', aplicamos la clase 'dark' al HTML con 
    // .add
    if(JSON.parse(saveTheme)){
      document.documentElement.classList.add('dark')
    }
    
    // ESTADO PARA CONTROLAR EL TEMA ACTUAL
    // Creamos un estado que refleja si el tema actual es oscuro
    // Inicializamos con el valor guardado en localStorage (convertido de string a boolean)
    const [isDark, setIsDark] = useState(JSON.parse(saveTheme))

    // FUNCIÓN PARA CAMBIAR ENTRE TEMA CLARO/OSCURO
    const handleClick = function(){
        // CAMBIAR CLASE EN EL DOM:
        // document = objeto que representa toda la página HTML
        // documentElement = elemento <html> (etiqueta raíz)
        // classList = lista de clases CSS del elemento
        // toggle('dark') = alterna (añade/remueve) la clase 'dark'
        // - Si la clase existe, la remueve (tema claro)
        // - Si no existe, la añade (tema oscuro)
        // toggle() RETORNA un booleano: true si la clase fue añadida, false si fue removida
        const isDarkChange = document.documentElement.classList.toggle('dark')
        
        // ACTUALIZAR EL ESTADO:
        // Actualizamos el estado con el nuevo valor del tema
        setIsDark(isDarkChange)

        // GUARDAR PREFERENCIA EN LOCALSTORAGE:
        // localStorage.setItem('clave', 'valor') = guarda datos en el navegador
        // - 'dark' = clave identificativa
        // - isDarkChange = valor a guardar (se convierte automáticamente a string)
        localStorage.setItem('dark', isDarkChange)
    }

    

  return (
    <div className='bg-Neutral-0 dark:bg-Neutral-800 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6'>
        <img src={isDark ? LogoDark : logo} alt="logo" />
        <button className='bg-neutral-100 dark:bg-Neutral-700 size-[50px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-Neutral-200 dark:hover:bg-Neutral-600 transition-colors' onClick={handleClick}>
            <img src={isDark ? IconSun : IconMoon} alt="Icono de luna" />
        </button>
    </div>
  )
}

export default Header