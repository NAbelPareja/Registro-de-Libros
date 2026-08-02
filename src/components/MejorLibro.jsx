import { useEffect, useState } from "react";

export const MejorLibro = ({ mejorLibro }) => {
  const [indice, setIndice] = useState(0);
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndice((anterior) => {
        if (anterior === mejorLibro.length - 1) {
          return 0;
        }
        return anterior + 1;
      });
      setTimeout(() => {
        setVisible(true)
      }, 100);
      }, 500);
    }, 8000);
    return () => clearInterval(intervalo)
  }, [])

  
  if(mejorLibro.length === 0){
    return (
    <div className="">
      <div className="flex flex-col items-center">
        <div
          className="bg-stone-400 w-100 items-center  rounded-full"
        >
          <h2>NO HAY LIBROS</h2>
        </div>
      </div>
    </div>
  );
  }else{
    return (
    <div className="">
      <div className="flex flex-col items-center">
        <div
          className="bg-stone-400 w-100 items-center  rounded-full"
          key={mejorLibro[indice].id}
        >
          <img
            className={`rounded-xl  h-100 object-cover mx-auto transition-opacity ${
              visible ? "opacity-100 duration-500" : "opacity-20 duration-500 "
            }`}
            src={mejorLibro[indice].portada}
            alt={mejorLibro[indice].titulo}
          />
        </div>
      </div>
    </div>
  );
  }
  
};
