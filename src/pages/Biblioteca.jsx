import { useState } from "react"
import { BookList } from "../components/BookList"
import { Navbar } from "../components/Navbar"
import { useBooks } from "../hooks/useBooks"

export const Biblioteca = () => {
  const {listaBooks} =useBooks()

  const [buscarNombre, setBuscarNombre] = useState("");
  const [buscarCategoria, setBuscarCategoria] = useState("");
  const [buscarEstado, setBuscarEstado] = useState("");
  const [fechaAgregada, setFechaAgregada] = useState("");


  const listaFiltrada = listaBooks.filter(libro =>{
    const nombre= !buscarNombre || libro.titulo.toLowerCase().includes(buscarNombre.toLowerCase());
    const categoria = !buscarCategoria || libro.categoria.toLowerCase().includes(buscarCategoria.toLowerCase());
    const estado = !buscarEstado || libro.estado.toLowerCase().includes(buscarEstado.toLowerCase());
    const fecha = !fechaAgregada || libro.fechaAgregado === fechaAgregada;
    return nombre && categoria && estado && fecha;
  });


  const handleBuscarNombre = (e) =>{
    setBuscarNombre(e.target.value)
  }

  const handleBuscarCategoria = (e) =>{
    if(e.target.checked){
      setBuscarCategoria(e.target.value)
    }else{
      setBuscarCategoria("")
    }
  }

  const handleBuscarEstado = (e) =>{
    if(e.target.checked){
      setBuscarEstado(e.target.value)
    }else{
      setBuscarEstado("")
    }
  }

  const handleBuscarfecha =(e)=>{
      setFechaAgregada(e.target.value);
  }

  return (
    <div className="flex flex-row space-between">
      <div className="w-1/5">
        <Navbar handleBuscarNombre ={handleBuscarNombre} handleBuscarCategoria={handleBuscarCategoria} handleBuscarEstado={handleBuscarEstado} handleBuscarfecha={handleBuscarfecha} fechaAgregada={fechaAgregada}></Navbar>
      </div>
      <div>
        <BookList listaBooks= {listaBooks} listaFiltrada = {listaFiltrada}></BookList>
      </div>
    </div>
  )
}
