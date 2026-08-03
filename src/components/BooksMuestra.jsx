import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";
export const BooksMuestra = ({
  handleEditarLibro,
  eliminarLibro,
  listaBooks,
  
}) => {
  return (
    <div className="">
      <h2 className="text-lg md:text-xl lg:text-2xl">Mis Libros</h2>
      <div className="  grid  overflow-x-auto grid-cols-1 md:grid-cols-2 gap-3 h-[650px]    sm:overflow-y-auto pr-2"
      >
        {listaBooks.map((libro) => (
          <div
            className="bg-zinc-100 w-full border-1 border-stone-300 rounded-xl  my-5"
            key={libro.id}

            onClick={() => {
              console.log(libro.pdf);
              console.log(libro.pdf.length);
              const nuevaVentana = window.open();

              nuevaVentana.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                <style>
                html, body{
                    margin:0;
                    width:100%;
                    height:100%;
                }
                iframe{
                    width:100%;
                    height:100%;
                    border:none;
                }
                </style>
                </head>
                <body>
                    <iframe src="${libro.pdf}"></iframe>
                </body>
                </html>
                `);
            }}
            className="bg-zinc-100 w-fit border-1 border-stone-300 rounded-xl  my-5"
            key={libro.id}
          >
            <img
              className="rounded-tl-xl rounded-tr-xl w-full h-72 object-cover"
              src={libro.portada}
              alt={libro.titulo}
            />
            <div className="flex flex-row justify-between pr-3">
              <div className="rounded-br rounded-bl p-3">
                <p className="bg-amber-600 text-stone-900 w-fit px-2 rounded">
                  {libro.categoria}
                </p>
                <h3 className="font-bold">{libro.titulo}</h3>
                <p className="text-amber-950">{libro.autor}</p>
                <div className="flex flex-row">{[1, 2, 3, 4, 5].map((valor) => (
                              <FaStar 
                              key={valor}
                              value={libro.calificacion}
                              className={` cursor-pointer text-xl ${valor <= libro.calificacion ? "text-yellow-500": "text-gray-300" }`}
                              />
                            )
                          )
                            }</div>
              </div>
              <div className="flex flex-col pt-3 gap-3">
                <button className="bg-amber-700 rounded-md text-zinc-100 font-bold px-1 py-1 flex flex-row items-center text-sm hover:bg-amber-800 hover:scale-110 transition"
                onClick={() => handleEditarLibro(libro.id)}>
                  <BiEditAlt />Editar
                </button>
                <button className="bg-red-700 rounded-md text-zinc-100 font-bold px-1 py-1 flex flex-row items-center text-sm hover:bg-red-800 hover:scale-110 transition"
                onClick={() => eliminarLibro(libro.id)}>
                  <MdDelete />Borrar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
