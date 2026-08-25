import React from "react";
import "./Marca.css";
import Produto from "../Produto/Produto";

const Marca = (props) => {

    return (
        (props.produtos.length > 0) ?
            <section className="marca">
                {props.produtos.map((produto) => (
                    <Produto
                        key={produto.nome}
                        nome={produto.nome}
                        marca={produto.marca}
                        preco={produto.preco}
                        imagem={produto.imagem}
                    />
                ))}
            </section>
        : ''
    );
};

export default Marca;