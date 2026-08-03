import { BookPdfLoad } from "../components/BookPdfLoad";
import { BookForm } from "../components/BookForm";
import { BooksMuestra } from "../components/BooksMuestra";
import { useBooks } from "../hooks/useBooks";
import { useFormularioBooks } from "../hooks/useFormularioBooks";
import { useEffect, useState } from "react";
export const Favoritos = () => {
  const categorias = [
    { id: 1, nombre: "Ficción" },
    { id: 2, nombre: "No ficción" },
    { id: 3, nombre: "Fantasía" },
    { id: 4, nombre: "Ciencia ficción" },
  ];

  const {
    agregarLibro,
    editarLibro,
    eliminarLibro,
    agregarfavorito,
    listaBooks,
  } = useBooks();

  const { form, handleInpuChange, setForm } = useFormularioBooks();
  const [idEditando, setIdEditando] = useState(null);



  
  const handlePdf = (e) => {
    const archivo = e.target.files[0];

    const lector = new FileReader();

    lector.readAsDataURL(archivo);

    lector.onload = () => {
      setForm({
        ...form,
        pdf: lector.result,
      });
    };
  };

  const handlePortada = (e) => {
    const archivo = e.target.files[0];

    const lector = new FileReader();

    lector.readAsDataURL(archivo);

    lector.onload = () => {
      setForm({ ...form, portada: lector.result });
    };
  };

  const handleGuardarLibro = (e) => {
    e.preventDefault();
    console.log(form);
    if (idEditando) {
      editarLibro(form);
    } else {
      agregarLibro(form);
    }
    setIdEditando(null);

    setForm({
      titulo: "",
      autor: "",
      categoria: "",
      estado: "",
      calificacion: "",
      descripcion: "",
      fechaPublicacion: "",
      fechaAgregado: "",
      pdf: "",
  portada: "",
    });
  };

  const handleEditarLibro = (id) => {
    setIdEditando(id);
    const edit = listaBooks.find((valor) => valor.id === id);
    if (edit) {
      setForm(edit);
    }
  };

  const [calificacion, setCalificacion] = useState(0)
 

  useEffect(() => {
    localStorage.setItem("listaBooks", JSON.stringify(listaBooks));
    console.log("Lista de libros total",listaBooks);
  }, [listaBooks]);

  return (
    <div className="flex flex-col sm:flex-row space-between  gap-3 lg:gap-5 p-5 md:p-10 ">
      <div className="basis-[45%]">
        <BooksMuestra handleEditarLibro={handleEditarLibro} eliminarLibro= {eliminarLibro} agregarfavorito={agregarfavorito} listaBooks={listaBooks}
        
        ></BooksMuestra>
      </div>
      <div className="basis-[55%] flex flex-col md:flex-row gap-3 lg:gap-5">
      <div className="basis-[45%]">
        <BookPdfLoad
          handlePdf={handlePdf}
          handlePortada={handlePortada}
          form={form}
          calificacion ={calificacion}
          setCalificacion={setCalificacion}
        ></BookPdfLoad>
      </div>
      <div className="basis-[55%]">
        <BookForm
          form={form}
          handleGuardarLibro={handleGuardarLibro}
          handleInpuChange={handleInpuChange}
          categorias={categorias}
        ></BookForm>
      </div>
      </div>
    </div>
  );
};
