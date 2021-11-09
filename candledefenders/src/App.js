import logo from './asset/img/logo.svg';
import './asset/css/App.css';

// Importar Componentes
import Micomponente from './components/MiComponente';
import Peliculas from './components/Peliculas';


function HolaMundo(nombre, edad){
  var presentacion = (
    <div>
        <h2>Hola soy {nombre}</h2>
        <h3>tengo {edad}</h3>
    </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Alexander";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hola Bienvenido al Curso de react web ¡¡¡¡
        </p>

        {HolaMundo(nombre, 12)}

        <section className="Micomponente">
        
          <Micomponente/>
          <Peliculas/>
        
        </section>
      </header>
    </div>
  );
}

export default App;
