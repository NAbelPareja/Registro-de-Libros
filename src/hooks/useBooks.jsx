import { useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";
import { init } from "../data/initialState";

export const useBooks = () => {
    const [listaBooks, dispatch] = useReducer(bookReducer, [], init)
    
    const agregarLibro = (libros) =>{
        const nota ={
            id: Date.now(),
            ...libros
        }
        const action ={
            type: 'agregar libro',
            payload: nota
        };
        dispatch(action)
    }

    const editarLibro =(libro) =>{
        const action = {
            type: 'editar libro',
            payload: libro
        };
        dispatch(action)
    }

    const eliminarLibro =(id) =>{
        const action= {
            type: 'eliminar libro',
            payload: id
        };
        dispatch(action)
    }

    const agregarfavorito = (id)=>{
        const action ={
            type: 'agregar favorito',
            payload:id
        };
        dispatch(action)
    }

  return { agregarLibro, editarLibro, eliminarLibro, agregarfavorito , listaBooks }
}
