import { BookPdfLoad } from "../components/BookPdfLoad";
import { BookForm } from "../components/BookForm";
import { BooksMuestra } from "../components/BooksMuestra";
import { useBooks } from "../hooks/useBooks";
import { useFormularioBooks } from "../hooks/useFormularioBooks";
import { useEffect, useState } from "react";
import { libros } from "../data/initialBooks";
export const Favoritos = () => {

  const categorias = [
    { id: 1, nombre: "Ficción" },
    { id: 2, nombre: "No ficción" },
    { id: 3, nombre: "Fantasía" },
    { id: 4, nombre: "Ciencia ficción" },
]


  const {
    agregarLibro,
    editarLibro,
    eliminarLibro,
    agregarfavorito,
    listaBooks,
  } = useBooks();

  const { form, handleInpuChange, setForm } = useFormularioBooks();

  const [idEditando, setIdEditando] = useState(null);

  const handleGuardarLibro = (e) => {
    e.preventDefault();
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
      calificacion:"",
      descripcion: "",
      fechaPublicacion: "",
      fechaAgregado: "",
    });
  };

  const handleEditarLibro =(id)=>{
    setIdEditando(id)
    const edit = listaBooks.finf(valor => valor.id === id)
    if(edit){
      setForm(edit)
    }
  }

  useEffect(() => {
    localStorage.setItem("listaBooks", JSON.stringify(listaBooks))
  }, [listaBooks])
  

  return (
    <div className="flex flex-row space-between gap-10  p-10 ">
      <div className="flex-1">
        <BooksMuestra handleEditarLibro={handleEditarLibro}></BooksMuestra>
      </div>
      <div className="flex-1">
        <BookPdfLoad></BookPdfLoad>
      </div>
      <div className="flex-1">
        <BookForm form={form} handleGuardarLibro={handleGuardarLibro} handleInpuChange = {handleInpuChange} categorias = {categorias}></BookForm>
      </div>
    </div>
  );
};
