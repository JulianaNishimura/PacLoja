import React from "react";
import "./Categoria.css";
import Marca from "../Marca/Marca";

const Categoria = (props) => {

    const corDeFundo = { backgroundColor: props.corSecundaria };
    const corSublinhado = { borderColor: props.corPrimaria };

    return (
        (props.produtos.length > 0) ? <section className="categoria" style={corDeFundo}>
              <h3 style={corSublinhado}>{props.nome}</h3>

              <div className="marcas">
                  <Marca
                      key={props.nome}
                      produtos={props.produtos}
                  />
              </div>
            </section>
        : ''
    );
};

export default Categoria;