

export const bookReducer = (state, action) => {

    switch(action.type){
        case 'agregar libro':
            return [...state, action.payload]
        case 'editar libro':
            return state.map( valor => {
                if(action.payload.id === valor.id){
                    return {
                        ...valor,
                        titulo: action.payload.titulo,
                        autor: action.payload.autor,
                        categoria: action.payload.categoria,
                        estado: action.payload.estado,
                        calificacion: action.payload.calificacion,
                        descripcion: action.payload.descripcion,
                        fechaPublicacion: action.payload.fechaPublicacion,
                        fechaAgregado: action.payload.fechaAgregado,
                    }
                }
                else{
                    return valor
                }
            })
        case 'eliminar libro':

            return state.filter(valor => valor.id !== action.payload)
        case 'agregar favorito':
            return state.map(valor => {
                if(valor.id === action.payload){
                    return {
                        ...valor,
                        favorito: !valor.favorito
                    }
                }
                else{
                    return valor
                }
            })
    }
}
