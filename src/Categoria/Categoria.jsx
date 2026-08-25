import React from "react";
import "./Categoria.css";
import Marca from "../components/Marca/Marca";

const Categoria = (props) => {

    const corDeFundo = { backgroundColor: props.corSecundaria };
    const corSublinhado = { borderColor: props.corPrimaria };

    const marcas = [...new Set(props.produtos.map((produto) => produto.marca))];

    return (
        (props.produtos.length > 0) ? <section className="categoria" style={corDeFundo}>
              <h3 style={corSublinhado}>{props.nome}</h3>

              <div className="marcas">
                  {marcas.map((marca) => (
                      <Marca
                          key={marca}
                          nome={marca}
                          produtos={props.produtos.filter((produto) => produto.marca === marca)}
                      />
                  ))}
              </div>
            </section>
        : ''
    );
};

export default Categoria;