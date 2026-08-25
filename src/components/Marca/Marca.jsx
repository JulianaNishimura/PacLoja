import React from "react";
import "./Marca.css";
import Produto from "../../../../src/components/Produto/Produto";

const Marca = (props) => {

    return (
        (props.produtos.length > 0) ? <section className="marca">
                <h3>{props.nome}</h3>
                <div className="produtos">
                    {props.produtos.map((produto) => (
                        <Produto
                            key={produto.nome}
                            nome={produto.nome}
                            marca={produto.marca}
                            preco={produto.preco}
                            imagem={produto.imagem}
                        />
                    ))}
                </div>
            </section>
        : ''
    );
};

export default Marca;