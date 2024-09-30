function Profissional({foto, nome, idade, profissao, color}) {
    return (
        <div style={{backgroundColor: color}}>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
}
export default Profissional