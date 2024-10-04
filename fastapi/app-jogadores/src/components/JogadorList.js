import React from 'react';
import Jogador from './Jogador';

function JogadorList(props) {
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Time</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.jogadores.map((jogador, index) => {
                        return (<Jogador 
                                    jogador={jogador} key={index}
                                    setJogadorId={props.setJogadorId}
                                    setJogadorNome={props.setJogadorNome}
                                    setJogadorIdade={props.setJogadorIdade}
                                    setJogadorTime={props.setJogadorTime}
                                    setLabelButton={props.setLabelButton}
                                />)
                    })
                }
            </tbody>
        </table>
    );
}

export default JogadorList;
