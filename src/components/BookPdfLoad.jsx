export const BookPdfLoad = () => {
  return (
    <div className="flex flex-col gap-5 m-5">
      <div>
        <img src="" alt="Portada" />
        <input type="file" id="portada" hidden accept="image/*" onChange="" />
        <label
          className="border-2 border-dashed border-amber-700 rounded-xl w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
          htmlFor="portada"
        >
          Seleccionar portada
        </label>
      </div>
      <div>
        <p >Sube tu libro en Pdf y gestionala de manera eficaz</p>
        <div className="flex flex-row gap-5 mt-5">
          <input type="file" id="pdf" hidden accept=".pdf" onChange="" />
          <label
            className="border-2 bg-amber-700 border-none text-stone-100 font-bold rounded-xl w-64 flex flex-col items-center justify-center cursor-pointer hover:bg-amber-800 "
            htmlFor="pdf"
          >
            Seleccionar archivos PDF
          </label>
          <div className="flex flex-col gap-2">
            <input type="file" id="pdf" hidden accept=".pdf" onChange="" />
            <label
              className="border-2 bg-amber-700 border-none text-stone-100 font-bold rounded-xl  cursor-pointer hover:bg-amber-800  flex flex-col items-center justify-center "
              htmlFor="pdf"
            >
              drive
            </label>
            <input type="file" id="pdf" hidden accept=".pdf" onChange="" />
            <label
              className="border-2 bg-amber-700 border-none text-stone-100 font-bold rounded-xl cursor-pointer hover:bg-amber-800 flex flex-col items-center justify-center "
              htmlFor="pdf"
            >
              drobox
            </label>
          </div>
        </div>
        <p className="text-stone-700 flex flex-col items-center justify-center">o arrastra y suelta los PDF aqui</p>
      </div>
    </div>
  );
};
