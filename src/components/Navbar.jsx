import { categorias } from "../data/categorias"
import { estadoLibro } from "../data/estadosLibro"
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoLibrary } from "react-icons/io5";
import { FaBarsProgress } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export const Navbar = ({handleBuscarNombre, handleBuscarCategoria, handleBuscarEstado, handleBuscarfecha, fechaAgregada }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5 bg-stone-50 p-2 md:p-5 lg:p-8">
      <div>
        <h1 className="my-3 text-base md:text-lg lg:text-xl flex flex-row items-center gap-1" ><IoLibrary />Biblioteca</h1>
        <div className="flex flex-row items-center gap-1">
        <CiSearch />
        <input className="border-amber-600 border-1 w-full rounded px-1" placeholder="Buscar libro..." onChange={handleBuscarNombre}>
</input>
        </div>
      </div>
      <hr className=" text-stone-300"/>
      <div> 
        <h2 className="flex flex-row items-center gap-1 text-normal md:text-lg font-bold"> <BiCategory />Categoria</h2>
        {categorias.map(categ => (
        <div key={categ.id}>
          <input type="checkbox" id={categ.id} name={categ.id} value={categ.nombre} className="mr-1 my-auto accent-amber-700 cursor-pointer hover:scale-110 transition" onChange = {handleBuscarCategoria}></input>
          <label htmlFor={categ.id}>{categ.nombre}</label>
        </div>
        ))}
      </div>
      <div>
        <h2 className="text-normal md:text-lg font-bold my-1 flex flex-row items-center gap-1"><FaBarsProgress />Estado</h2>
        {estadoLibro.map(est => (
        <div key={est.id}>
          <input type="checkbox" id={est.id} name={est.id} value={est.nombre} className="mr-1 my-auto accent-amber-700" onChange={handleBuscarEstado}></input>
          <label htmlFor={est.id}>{est.nombre}</label>
        </div>
        ))}
      </div>
      <div>
        <h2 className="text-normal md:text-lg font-bold my-1 flex flex-row items-center gap-1"><MdDateRange  className="w-7 h-full"/>Fecha de Agregado</h2>
        <div >
          <input type="date" placeholder ="Seleccionar fecha" name ="fecha"  value = {fechaAgregada} className="mr-1 my-auto accent-amber-700 w-full" onChange={handleBuscarfecha}></input>
          <label htmlFor="fecha">Fecha</label>
        </div>
      </div>
      <hr className="my-2 text-stone-300"/>
        <Link 
        to="/favoritos"
        className="border-amber-600 border-2 rounded-md w-full flex justify-center text-amber-700 hover:text-amber-800 cursor-pointer py-2 hover:scale-110 transition"> +Agregar Libro</Link>
    </div>
  );
};
