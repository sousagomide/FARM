import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const nome = 'Provas de TI'
  const novoNome = nome.toUpperCase()
  
  function soma(a, b) {
    return a + b;
  }

  const url = 'https://www.github.com/sousagomide.png'
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {novoNome} <code>tudo para você passar.</code>
        </p>
        <p>Soma = {soma(10,11)}</p>
        <img src={url} alt="Imagem do perfil no Github"/>
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;
