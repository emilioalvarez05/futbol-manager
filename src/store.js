import { createStore } from "redux";

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Lionel Messi",
        foto: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt40015891deaa4019/6265b5649084154bb3b408c0/Lionel_Messi.jpg"
    },
    {
        id: 2,
        nombre: "Neymar Jr",
        foto: "https://tntsports.com.ar/__export/1653233017478/sites/tntsports/img/2022/03/13/neymar_en_psg_crop1647193328020.jpg_450246761.jpg"
    },
    {
    id: 3,
    nombre: "Mbappe",
    foto: "https://es.coachesvoice.com/wp-content/uploads/2022/03/mbappemobile-scaled.jpg"
}],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    
    if(action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if(action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if(action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    if(action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    return state
    

}





export default createStore(reducerEntrenador)

