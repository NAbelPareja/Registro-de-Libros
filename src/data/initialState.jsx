import { libros } from "./initialBooks"
export const init= () => {
    const datos = localStorage.getItem('listaBooks')
    if(datos){
      return JSON.parse(datos)
    }else{
      localStorage.setItem("listaBooks", JSON.stringify(libros))
    return libros
    }
}

 
