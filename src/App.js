
import { Provider } from "react-redux"
import store from "./store"
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import "./style/style.scss"

const App = () => (
  <Provider store={store}>
  <main>
    <h1>Futbol Manager</h1>
    <Jugadores />
    <EquipoSeleccionado />
  </main>
  </Provider>
) 

export default App;
