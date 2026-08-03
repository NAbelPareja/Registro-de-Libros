import { FaSave } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
export const BookForm = ({
  categorias,
  form,
  handleGuardarLibro,
  handleInpuChange,
}) => {
  return (
    <div className="">
      <form action="" onSubmit={handleGuardarLibro}>
        <fieldset className="flex flex-col gap-3">
          <legend className="font-bold">Información del libro</legend>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Titulo</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="text"
              name="titulo"
              value={form.titulo}
              onChange={handleInpuChange}
              required
            />
          </div>

          <div className="flex flex-col w-full gap-1  ">
            <label htmlFor="">Autor</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="text"
              name="autor"
              value={form.autor}
              onChange={handleInpuChange}
              required
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Categoria</label>
            <select
              name="categoria"
              id="categoria"
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              value={form.categoria}
              onChange={handleInpuChange}
              required
            >
              <option value="">Seleccionar categoría</option>
              {categorias.map((valor) => (
                <option key={valor.id} value={valor.id}>
                  {valor.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Estado</label>
            <select
              name="estado"
              id=""
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              value={form.estado}
              onChange={handleInpuChange}
            >
              <option value="">Seleccionar estado</option>
              <option value="Por leer">Por leer</option>
              <option value="Leyendo">Leyendo</option>
              <option value="Terminado">Terminado</option>
            </select>
          </div>
          <div className="flex flex-row gap-1">
            <p>Calificacion</p>
            {[1, 2, 3, 4, 5].map((valor) => (
              <FaStar
                key={valor}
                onChange={handleInpuChange}
                onClick={() =>
                  handleInpuChange({
                    target: {
                      name: "calificacion",
                      value: valor,
                    },
                  })
                }
                className={` cursor-pointer text-2xl ${valor <= form.calificacion ? "text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Descripcion</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="text"
              name="descripcion"
              value={form.descripcion}
              onChange={handleInpuChange}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Fecha de Publicacion</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="date"
              name="fechaPublicacion"
              value={form.fechaPublicacion}
              onChange={handleInpuChange}
              required
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Fecha de agregado</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="date"
              name="fechaAgregado"
              value={form.fechaAgregado}
              onChange={handleInpuChange}
              required
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-green-800 text-white py-1 px-2 rounded-md flex flex-row items-center gap-1 hover:bg-green-900 cursor-pointer my-5 font-bold"
        >
          <FaSave /> Guardar Libro
        </button>
      </form>
    </div>
  );
};
