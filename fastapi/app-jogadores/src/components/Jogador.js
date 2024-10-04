import React from 'react';
import axios from 'axios';

function Jogador(props) {
    const excluirJogador = (jogadorId) => {
        axios.put(`http://localhost:8000/jogadores/${jogadorId}`, props.jogador)
        .then(response => {
            console.log('Jogador atualizado com sucesso ' + response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const editarJogador = (jogador) => {
        props.setJogadorId(jogador.id);
        props.setJogadorNome(jogador.nome);
        props.setJogadorIdade(jogador.idade);
        props.setJogadorTime(jogador.time);
        props.setLabelButton('Atualizar');
    };

    return (
        <tr>
            <td>{props.jogador.nome}</td>
            <td>{props.jogador.idade}</td>
            <td>{props.jogador.time}</td>
            <td>
                <button className='btn btn-sm' onClick={() => editarJogador(props.jogador)}>
                    <span className='badge rounded-pill bg-info'>
                        E
                    </span>
                </button>
                <button className='btn btn-sm' onClick={() => excluirJogador(props.jogador.id)}>
                    <span className='badge rounded-pill bg-danger'>
                        X
                    </span>
                </button>
            </td>
        </tr>
    );
}

export default Jogador;
