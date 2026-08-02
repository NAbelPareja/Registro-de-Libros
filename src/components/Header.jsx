import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
import { FaCashRegister } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-10 py-5 border-b-1 border-stone-300" >
      <div className="flex flex-row items-center gap-1 text-xl font-bold"><FaBook /> BookShop</div>
      <div>
        <nav>
          <ul className = "flex flex-row justify-between items-center gap-8 ">
            <li className = "hover:text-orange-800 ">
              <NavLink to="/home"
              className={ ({isActive}) => 
                `pb-2 border-b-3 transition-colors flex flex-row items-center gap-1 ${
                  isActive
                  ? "border-amber-700 text-amber-700 font-bold"
                  : "border-transparent hover:border-amber-700 hover:text-amber-700"
                }`}
              ><IoIosHome />Inicio

              </NavLink>
              
            </li>
            <li className = "hover:text-orange-800 active:text-orange-800">
              <NavLink to="/biblioteca" 
              className={ ({isActive}) => 
                `pb-2 border-b-3 transition-colors  flex flex-row items-center gap-1 ${
                  isActive
                  ? "border-amber-700 text-amber-700 font-bold"
                  : "border-transparent hover:border-amber-700 hover:text-amber-700"
                }`}><IoLibrary />Biblioteca</NavLink>
            </li>
            <li className = "hover:text-orange-800">
              <NavLink to="/favoritos" 
              className={ ({isActive}) => 
                `pb-2 border-b-3 transition-colors flex flex-row items-center gap-1 ${
                  isActive
                  ? "border-amber-700 text-amber-700 font-bold"
                  : "border-transparent hover:border-amber-700 hover:text-amber-700 "
                }`}><FaCashRegister />Registrar libro</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button className = "bg-amber-700 hover:bg-amber-800 text-stone-900 font-bold py-1 px-2 rounded">  Carrito</button>
      </div>
    </div>
  );
};
