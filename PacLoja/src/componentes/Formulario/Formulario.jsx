import { useState } from "react";
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
    const [area, setArea] = useState(props.areas[0])
    const [marca, setMarca] = useState(marcas[0])

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProdutoCadastrado(
            {
                "nome" : nome,
                "preco" : preco,
                "area" : area,
                "marca" : marca
            }
        );
        setNome('');
        setPreco('');
        setArea(props.areas[0]);
        setMarca(marcas[0]);
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