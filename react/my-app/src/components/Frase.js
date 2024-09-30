import style from './Frase.module.css'

function Frase() {
    return (
        <div className={style.fraseContainer}>
            <h3 className={style.fraseContent}>A melhor forma de prever o futuro é criá-lo</h3>
        </div>
    );
}

export default Frase