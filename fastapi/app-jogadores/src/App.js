import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
        <div className='mt-3 justify-content-center align-items-center mx-auto' 
        style={{"width": "60vw", "backgroundColor": "#ffffff"}}>
            <h2 className='text-center text-white bg-success card mb-1'>Gerenciamento de Jogadores</h2>
            <h6 className='text-center text-white bg-success mb-2 pb-2'>Informações do Jogador</h6>
            {/* Formulário */}
            <div className='card-body text-center'>
              <h5 className='card text-center text-white bg-dark mb-2 pb-1'>Cadastro do Jogador</h5>
              <span className='card-text'>
                <input className='mb-2 form-control' placeholder='Informe o Nome'/>
                <input className='mb-2 form-control' placeholder='Informe a Idade'/>
                <input className='mb-2 form-control' placeholder='Informe o Time'/>
                <button className='btn btn-outline-success mb-4'>Cadastrar</button>
              </span>
              {/* Lista de jogadores */}
              <h5 className='card text-center text-white bg-dark mb-4 pb-1'>Lista de Jogadores</h5>
              <div></div>
            </div>
            {/* Rodapé */}
            <h6 className='text-center text-light bg-success py-1'>&copy; Virtucom - 2024</h6>
        </div>
    </div>
  );
}

export default App;
