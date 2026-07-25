import { categorias } from "../data/categorias"
import { estadoLibro } from "../data/estadosLibro"
import { ordenarLibros } from "../data/ordenarLibros"
import { BiCategory } from "react-icons/bi";

export const Navbar = () => {
  return (
    <div className="flex flex-col gap-8 bg-stone-50 p-8">
      <div>
        <h1 className="my-3 text-xl" >Biblioteca</h1>
        <input className="border-amber-600 border-1 w-full rounded px-1" placeholder="Buscar libro..."></input>
      </div>
      <hr className="my-2 text-stone-300"/>
      <div> 
        <h2 className="flex flex-row items-center text-lg font-bold my-1"> <BiCategory />Categoria</h2>
        {categorias.map(categ => (
        <div key={categ.id}>
          <input type="checkbox" id="{categ.id}" className="mr-1 my-auto accent-amber-700 cursor-pointer hover:scale-110 transition"></input>
          <label htmlFor="{categ.id}">{categ.nombre}</label>
        </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-bold my-1">Estado</h2>
        {estadoLibro.map(est => (
        <div key={est.id}>
          <input type="checkbox" id="{est.id}" className="mr-1 my-auto accent-amber-700"></input>
          <label htmlFor="{est.id}">{est.nombre}</label>
        </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-bold my-1">Ordenar</h2>
        {ordenarLibros.map(ord => (
        <div key={ord.id}>
          <input type="checkbox" id="{ord.id}" className="mr-1 my-auto accent-amber-700"></input>
          <label htmlFor="{ord.id}">{ord.nombre}</label>
        </div>
        ))}
      </div>
      <hr className="my-2 text-stone-300"/>
        <button className="border-amber-600 border-2 rounded-md w-ful pl-auto text-amber-700 hover:text-amber-800 cursor-pointer py-2 hover:scale-110 transition">+ Agregar Libro</button>
    </div>
  );
};
