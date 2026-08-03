import { useEffect, useState } from "react";
import { MejorLibro } from "../components/MejorLibro";
import { useBooks } from "../hooks/useBooks";

export const Home = () => {
  const { listaBooks } = useBooks();

  let mejorLibro = [];

  for (let estrellas = 5; estrellas >= 1; estrellas--) {
    mejorLibro = listaBooks.filter((valor) => valor.calificacion === estrellas);
    if (mejorLibro.length > 0) {
      break;
    }
  }

  const [indice, setIndice] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false);
      
      setTimeout(() => {
        setIndice((numero) => {
          
          if (numero === listaBooks.length - 4) {
            return 0;
          }
          if(listaBooks.length < numero+2){
            return 0;
          }else{
            return numero + 1;
          }
          
        });
        setTimeout(() => {
          setVisible(true);
        }, 500);
      }, 100);
    }, 8000);

    return () => clearInterval(intervalo);
  }, [listaBooks.length]);
  return (
      <div className="flex flex-col  md:flex-row space-between gap-20 px-5 md:px-10 lg:px-15 py-25">
        <div className="flex flex-col gap-5">
          <p className="text-amber-800 text-lg">
            Tu biblioteca personal digital
          </p>
          <h1 className="text-5xl">No Hay Mejor Amigo Que Un Buen Libro</h1>
          <p className="text-stone-700">
            Organiza, descubre y lleva el control de tu colección de libros de
            forma sencilla y elegante. Tu biblioteca, a tu manera.
          </p>
          <div>
            <input
              type="text"
              placeholder="Correo electrónico"
              className="bg-zinc-100 py-1 px-2 rounded-tl rounded-bl"
            />
            <button className="bg-amber-700 py-1 px-2 rounded-tr rounded-br ">
              Suscribirse
            </button>
          </div>
          <div className="flex flex-row gap-10 items-center">
            {listaBooks.length === 0 ? (
              <p>NO HAY LIBROS</p>
            ) : (
              <div className="flex items-center">
                <img
                  src={listaBooks[(indice + 3)% listaBooks.length].portada}
                  alt={listaBooks[(indice + 3)% listaBooks.length].portada}
                  className={`w-18 h-24 object-cover rounded-lg border-r border-3 border-stone-200 transition-opacity ${visible ? "opacity-100 duration-500" : "opacity-0 duration-500"}`}
                />
                <img
                  src={listaBooks[(indice + 2)% listaBooks.length].portada}
                  alt={listaBooks[(indice + 2)% listaBooks.length].portada}
                  className={`w-18 h-24 object-cover rounded-lg -ml-2 border-r border-3 border-stone-200 transition-opacity ${visible ? "opacity-100 duration-500" : "opacity-0 duration-500"}`}
                />
                <img
                  src={listaBooks[(indice + 1)% listaBooks.length].portada}
                  alt={listaBooks[(indice + 1)% listaBooks.length].portada}
                  className="w-18 h-24 object-cover rounded-lg -ml-2 border-r border-3 border-stone-200"
                />
                <img
                  src={listaBooks[indice].portada}
                  alt={listaBooks[indice].portada}
                  className="w-18 h-24 object-cover rounded-lg -ml-2 border-r border-3 border-stone-200"
                />
              </div>
            )}
            <div className="text-amber-800">
              {listaBooks.length} libros de coleccion
            </div>
          </div>
        </div>
        <div>
          <MejorLibro mejorLibro={mejorLibro}></MejorLibro>
        </div>
      </div>
  );
};
