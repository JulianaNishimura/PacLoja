import "./Professor.css";
const Professor = (props) => {

    return (
        <div className="colaborador">

            <div className="cabecalho">
                {props.imagem && <img src={props.imagem} alt={props.nome} />}
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.titulo}</h5>
                <p>R$ {props.preco}</p>
            </div>

        </div>
    );
}
export default Professor;