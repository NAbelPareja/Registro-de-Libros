import {MejorLibro} from "../components/MejorLibro";
import {UltimosLibros} from "../components/UltimosLibros";

export const Home = () => {
  return (
    <div className=" px-15 py-20">
      <div className="flex flex-row space-between gap-20 ">
        <div className="flex flex-col gap-5">
          <p className="text-amber-800 text-lg">Tu biblioteca personal digital</p>
          <h1 className="text-5xl">No Hay Mejor Amigo Que Un Buen Libro</h1>
          <p className="text-stone-700">Organiza, descubre y lleva el control de tu colección de libros de forma sencilla y elegante. Tu biblioteca, a tu manera.</p>
          <div>
          <input type="text" placeholder="Correo electrónico" className="bg-zinc-100 py-1 px-2 rounded-tl rounded-bl"
           /> 
          <button className="bg-amber-700 py-1 px-2 rounded-tr rounded-br ">Suscribirse</button>
          </div>
          <div className="flex flex-row">
            <div>
              <h1>img</h1>
              <img src="s" alt=""/>
            </div>
            <h2>120 libros de tu coleccion</h2>
          </div>
        </div>
        <div>
          <MejorLibro></MejorLibro>
        </div>
      </div>
      <UltimosLibros></UltimosLibros>
    </div>
    
  )
}
