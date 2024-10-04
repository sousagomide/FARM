import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import JogadorList from './components/JogadorList';

function App() {
  
  const [jogadorList, setJogadorList] = useState([{}]);
  const [jogadorNome, setJogadorNome] = useState('');
  const [jogadorIdade, setJogadorIdade] = useState('');
  const [jogadorTime, setJogadorTime] = useState('');
  const [jogadorId, setJogadorId] = useState('');

  const [labelButton, setLabelButton] = useState('Cadastrar');

  const limparDados = () => {
    setJogadorId('');
    setJogadorNome('');
    setJogadorIdade('');
    setJogadorTime('');
    setLabelButton('Cadastrar');
    document.querySelectorAll('input').forEach(input => input.value = '');
  };

  useEffect(() => {
    axios.get('http://localhost:8000/jogadores')
    .then(response => {
      // console.log(response.data);
      setJogadorList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  const adicionarAtualizarJogador = () => {
    const jogador = {
      'jogador_nome': jogadorNome,
      'jogador_idade': jogadorIdade,
      'jogador_time': jogadorTime
    };
    if (jogadorId !== '') {
      editarJogador(jogador);
    } else {
      adicionarJogador(jogador);
    }
    limparDados();
  };

  const adicionarJogador = (jogador) => {
    axios.post('http://localhost:8000/jogadores', jogador)
    .then(response => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  };

  const editarJogador = (jogador) => {
    axios.put(`http://localhost:8000/jogadores/${jogadorId}`, jogador)
    .then(response => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

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
                <input className='mb-2 form-control' placeholder='Informe o Nome' onChange={(e) => setJogadorNome(e.target.value)} value={jogadorNome}/>
                <input className='mb-2 form-control' placeholder='Informe a Idade' onChange={(e) => setJogadorIdade(e.target.value)} value={jogadorIdade}/>
                <input className='mb-2 form-control' placeholder='Informe o Time' onChange={(e) => setJogadorTime(e.target.value)} value={jogadorTime}/>
                <button className='btn btn-outline-success mb-4' onClick={adicionarAtualizarJogador}>{labelButton}</button>
                <button className='btn btn-outline mb-4' onClick={limparDados}>Cancelar</button>
              </span>
              {/* Lista de jogadores */}
              <h5 className='card text-center text-white bg-dark mb-4 pb-1'>Lista de Jogadores</h5>
              <div>
                <JogadorList 
                  jogadores={jogadorList} 
                  setJogadorId={setJogadorId}
                  setJogadorNome={setJogadorNome}
                  setJogadorIdade={setJogadorIdade}
                  setJogadorTime={setJogadorTime}
                  setLabelButton={setLabelButton}
                />
              </div>
            </div>
            {/* Rodapé */}
            <h6 className='text-center text-light bg-success py-1'>&copy; Virtucom - 2024</h6>
        </div>
    </div>
  );
}

export default App;
