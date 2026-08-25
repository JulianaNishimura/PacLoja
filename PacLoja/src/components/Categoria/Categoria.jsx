
import React from "react";
import "./Categoria.css";
import Produto from "../Produto/Produto";

const Categoria = (props) => {

  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  return (
    (props.produtos.length > 0) ? <section className="categoria" style={corDeFundo}>
      <h3 style={corSublinhado}>{props.nome}</h3>
      <div className="produtos">
        {props.produtos.map(produto => <Produto
                                            key={produto.nome}
                                            nome={produto.nome}
                                            marca={produto.marca}
                                            preco={produto.preco}
                                            imagem={produto.imagem}
                                            conservacao={produto.conservacao}
                                        /> )}

      </div>
    </section>
    : ''
  );
};

export default Categoria;

