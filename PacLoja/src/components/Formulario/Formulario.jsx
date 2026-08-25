import React, { useState } from "react";
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
    const [imagem, setImagem] = useState('')
    const [area, setArea] = useState('')
    const [marca, setMarca] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProfCadastrado(
            {
                "nome" : nome,
                "preco" : preco,
                "imagem" : imagem,
                "area" : area,
                "marca" : marca
            }
        );
        setNome('');
        setPreco('');
        setImagem('');
        setArea('');
        setMarca('');
    }

    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>

                <h2>Dados do professor:</h2>

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

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
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

                <Botao>Criar Professor</Botao>

            </form>

        </section>
    )
}

export default Formulario;

