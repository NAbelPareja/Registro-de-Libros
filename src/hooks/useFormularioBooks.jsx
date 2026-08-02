import { useState } from "react"

export const useFormularioBooks = () => {
    const [form, setForm] = useState({
        id:"",
        titulo: "",
        autor: "",
        categoria: "",
        estado: "",
        calificacion:0,
        descripcion:"",
        fechaPublicacion: "",
        fechaAgregado:"",
        portada:null,
        pdf:null
    })
    const handleInpuChange=(e)=>{
        e.preventDefault
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }
    
  return {form, setForm, handleInpuChange}
}
