import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const marcas = ["HP", "Dell", "Positivo", "Asus", "Xing Ling"];

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState(props.categorias[0]);
  const [marca, setMarca] = useState(marcas[0]);

  const aoSalvar = (evento) => {
    evento.preventDefault();

    if (nome.trim() === "") {
      alert("Informe o nome do produto.");
      return;
    }

    if (preco.trim() === "" || Number(preco) <= 0 || isNaN(Number(preco))) {
      alert("Informe um preço válido para o produto.");
      return;
    }

    props.aoProdutoCadastrado({
      nome: nome,
      preco: preco,
      categoria: categoria,
      marca: marca,
    });
    setNome("");
    setPreco("");
    setCategoria(props.categorias[0]);
    setMarca(marcas[0]);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto:</h2>

        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          label="Preço"
          placeholder="Digite o preço"
          valor={preco}
          aoAlterado={(valor) => setPreco(valor)}
        />

        <ListaSuspensa
          label="Categorias"
          itens={props.categorias}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />

        <ListaSuspensa
          label="Marca"
          itens={marcas}
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />

        <Botao>Cadastrar Produto</Botao>
      </form>
    </section>
  );
};

export default Formulario;