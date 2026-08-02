import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
export const BooksMuestra = ({
  handleEditarLibro,
  eliminarLibro,
  listaBooks,
}) => {
  return (
    <div className="">
      <h2 className="text-2xl">Mis Libros</h2>
      <div className="grid grid-cols-2 gap-3 h-[650px] overflow-y-auto pr-2">
        {listaBooks.map((libro) => (
          <div
            className="bg-zinc-100 w-full border-1 border-stone-300 rounded-xl  my-5"
            key={libro.id}
          >
            <img
              className="rounded-tl-xl rounded-tr-xl w-full h-72 object-cover"
              src={libro.portada}
              alt={libro.titulo}
            />
            <div className="flex flex-row justify-between">
              <div className="rounded-br rounded-bl p-3">
                <p className="bg-amber-600 text-stone-900 w-fit px-2 rounded">
                  {libro.categoria}
                </p>
                <h3 className="font-bold">{libro.titulo}</h3>
                <p className="text-amber-950">{libro.autor}</p>
                <p>{libro.calificacion}</p>
              </div>
              <div className="flex flex-col pr-3 pt-3 gap-3">
                <button className="bg-amber-700 rounded-md text-zinc-100 font-bold px-2 py-1 flex flex-row items-center gap-1 hover:bg-amber-800 hover:scale-110 transition"
                onClick={() => handleEditarLibro(libro.id)}>
                  <BiEditAlt />Editar
                </button>
                <button className="bg-red-700 rounded-md text-zinc-100 font-bold px-1 py-1 flex flex-row items-center gap-1 hover:bg-red-800 hover:scale-110 transition"
                onClick={() => eliminarLibro(libro.id)}>
                  <MdDelete />Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
