import { libros } from "../data/initialBooks";
export const BooksMuestra = () => {
  return (
    <div className="">
      <h2 className="text-2xl">Mis Libros</h2>
      <div className="flex flex-col ">
        {libros.map((libro) => (
          <div
            className="bg-zinc-100 w-full border-1 border-stone-300 rounded-xl  my-5"
            key={libro.id}
          >
            <img
              className="rounded-tl-xl rounded-tr-xl w-full h-72 object-cover"
              src={libro.portada}
              alt={libro.titulo}
            />
            <div className="rounded-br rounded-bl p-3">
              <p className="bg-amber-600 text-stone-900 w-fit px-2 rounded">
                {libro.categoria}
              </p>
              <h3 className="font-bold">{libro.titulo}</h3>
              <p className="text-amber-950">{libro.autor}</p>
              <p>{libro.calificacion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
