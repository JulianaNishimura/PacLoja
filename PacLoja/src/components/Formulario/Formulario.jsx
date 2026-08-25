<<<<<<< HEAD:PacLoja/src/components/Formulario/Formulario.jsx
import React, { useState } from "react";
=======
import { useState } from "react";
>>>>>>> 6e325024dbc6d78a7a4ed66b98332d6588841b0a:PacLoja/src/componentes/Formulario/Formulario.jsx
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const marcas = [
    'HP',
    'Dell',
    'Positivo',
    'Asus',
    'Xing Ling'
];

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [area, setArea] = useState('')
    const [marca, setMarca] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
<<<<<<< HEAD:PacLoja/src/components/Formulario/Formulario.jsx
        props.aoProfCadastrado(
=======
        props.aoProdutoCadastrado(
>>>>>>> 6e325024dbc6d78a7a4ed66b98332d6588841b0a:PacLoja/src/componentes/Formulario/Formulario.jsx
            {
                "nome" : nome,
                "preco" : preco,
                "area" : area,
                "marca" : marca
            }
        );
        setNome('');
        setPreco('');
        setArea('');
        setMarca('');
    }

    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>

                <h2>Dados do Produto:</h2>

                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    label="Preço"
                    placeholder="Digite o preço"
                    valor={preco}
                    aoAlterado={valor => setPreco(valor)}
                />

                <ListaSuspensa
                    label="Áreas"
                    itens={props.areas}
                    valor={area}
                    aoAlterado={valor => setArea(valor)}
                />

                <ListaSuspensa
                    label="Marca"
                    itens={marcas}
                    valor={marca}
                    aoAlterado={valor => setMarca(valor)}
                />

                <Botao>Cadastrar Produto</Botao>

            </form>

        </section>
    )
}

export default Formulario;