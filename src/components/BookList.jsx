export const BookList = ({ listaBooks, listaFiltrada }) => {
  return (
    <div className="m-10">
      <h2 className="text-2xl">Mis Libros</h2>
      <p>Mostrando {listaFiltrada.length} de {listaBooks.length} libros</p>
      <div className="grid grid-cols-4 gap-10">
        {listaFiltrada.map((libro) => (
          <div
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
