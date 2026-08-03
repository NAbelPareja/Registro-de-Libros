import { FaFilePdf } from "react-icons/fa";
export const BookPdfLoad = ({ handlePdf, handlePortada, form }) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <img src={form.portada} alt="Portada" className="w-full  py-2" />
        <input
          type="file"
          id="portada"
          hidden
          onChange={handlePortada}
          required
        />
        <label
          className="border-2 border-dashed border-amber-700 rounded-xl w-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
          htmlFor="portada"
        >
          Seleccionar portada
        </label>
      </div>
      <div>
        <p>Sube tu libro en Pdf y gestionala de manera eficaz</p>
        <div className=" mt-2">
          <input
            type="file"
            id="pdf"
            hidden
            accept=".pdf"
            onChange={handlePdf}
            required
          />
          <label
            className="border-2 bg-amber-700 border-none text-stone-100 font-bold rounded-xl w- px-2 py-2 flex flex-row items-center justify-center gap-1 cursor-pointer hover:bg-amber-800 hover:scale-110 transition "
            htmlFor="pdf"
          >
            <FaFilePdf /> Seleccionar archivos PDF
          </label>
        </div>
        <p className="text-stone-700 flex flex-col items-center justify-center">
          o arrastra y suelta los PDF aqui
        </p>
      </div>
    </div>
  );
};
