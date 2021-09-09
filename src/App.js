
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar"
import { ItemListContainer } from './components/ItemListContainer';



//const App = () => {
  //const [count, setCount]  = useState (0)

function App () {

  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer saludo="¡Bienvenido!"/>
      </header>
   

    <itemCount/>

    <img scr={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;

