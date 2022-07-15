import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <section>
        <Componente msg = "Hola soy un componente funcional expresado desde una prop" />
        <hr/>
        <Propiedades 
          cadena = "Esto es una cadena de texto" 
          numero = {19} 
          booleano = {true} 
          arreglo = {[1,2,3,4,5]} 
          objeto = { {nombre : "Abraham", Edad: "21"} }
          elementoReact = {<i> Esto es un elemento React </i>}
          funcion = {(num) => num*num}
          componenteReact = {<Componente msg = "Soy un componente pasado como prop"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
      </section>
      </header>
    </div>
  );
}

export default App;
