export const BookForm = () => {
  return (
    <div className="m-5">
      <form action="">
        <fieldset className="flex flex-col gap-3">
          <legend>Información del libro</legend>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Titulo</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="text"
            />
          </div>

          <div className="flex flex-col w-full gap-1  ">
            <label htmlFor="">Autor</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="text"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Categoria</label>
            <select
              name=""
              id=""
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
            >
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Estado</label>
            <select
              name=""
              id=""
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
            >
              <option value="">Por leer</option>
              <option value="">Leyendo</option>
              <option value="">Terminado</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Calificacion</label>
            <input type="radio" id="star5" name="calificacion" value="5" />
            <label HtmlFor="star5" title="5 estrellas">
              ★
            </label>

            <input type="radio" id="star4" name="calificacion" value="4" />
            <label htmlFor="star4" title="4 estrellas">
              ★
            </label>

            <input type="radio" id="star3" name="calificacion" value="3" />
            <label htmlFor="star3" title="3 estrellas">
              ★
            </label>

            <input type="radio" id="star2" name="calificacion" value="2" />
            <label htmlFor="star2" title="2 estrellas">
              ★
            </label>

            <input type="radio" id="star1" name="calificacion" value="1" />
            <label htmlFor="star1" title="1 estrella">
              ★
            </label>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Descripcion</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="text"
            />
          </div>
          
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Fecha de Publicacion</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="date"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="">Fecha de agregado</label>
            <input
              className="bg-stone-100 border-amber-700 border-1 rounded-md"
              type="date"
            />
          </div>

        </fieldset>
        <button
          type="submit"
          className="bg-amber-800 text-white py-1 px-2 rounded-md hover:bg-amber-900 cursor-pointer my-5"
        >
          Guardar Libro
        </button>
      </form>
    </div>
  );
};
