import React from "react";
import "./Produto.css";

const Produto = (props) => {
  return (
    <div className="produto">
      <div className="cabecalho">
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="rodape">
        <h4>
          {props.nome} - {props.marca}
        </h4>
        <h4>R$ {props.preco}</h4>
        <h5>{props.conservacao}</h5>
      </div>
    </div>
  );
};
export default Produto;
