import './App.css';
import HelloWorld from './components/HelloWorld';
import MeuNome from './components/MeuNome';
import Profissional from './components/Profissional';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <HelloWorld/>
        <MeuNome nome="Denecley Alvim"/>
        <Profissional 
          foto="https://www.github.com/sousagomide.png"
          nome="Gomide"
          idade="34"
          profissao="Analista de Sistemas"
          color="blue"
        />
      {/* </header> */}
    </div>
  );
}

export default App;
