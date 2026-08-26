import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const marcas = ["HP", "Dell", "Positivo", "Asus", "Xing Ling"];

const categorias = [
    {
      nome: "Computadores",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Acessórios",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Impressoras",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Games",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "Gadgets",
      corPrimaria: "#d69be8",
      corSecundaria: "#f5e8fa",
    },
];

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [conservacao, setConservacao] = useState("");
  const [categoria, setCategoria] = useState(categorias[0]);
  const [marca, setMarca] = useState(marcas[0]);

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoProdutoCadastrado({
      nome: nome,
      preco: preco,
      categoria: categoria,
      marca: marca,
      conservacao : conservacao
    });
    setNome("");
    setPreco("");
    setCategoria(categorias[0]);
    setMarca(marcas[0]);
  };

  const mudaConservacao = (evento) => {
    setConservacao(event.target.value);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto:</h2>

        <ListaSuspensa
          label="Categorias"
          itens={categorias}
          valor={categoria}
          aoAlterado={(valor) => setCategoria(valor)}
        />

        <ListaSuspensa
          label="Marca"
          itens={marcas}
          valor={marca}
          aoAlterado={(valor) => setMarca(valor)}
        />

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

        <label>
          <input 
            type="radio" 
            name="conservacao" 
            value="novo" 
            checked={conservacao === 'novo'} 
            onChange={mudaConservacao} 
          /> Cherry
        </label>

        <label>
          <input 
            type="radio" 
            name="conservacao" 
            value="usado" 
            checked={conservacao === 'usado'} 
            onChange={mudaConservacao} 
          /> Cherry
        </label>

        <Botao>Cadastrar Produto</Botao>
      </form>
    </section>
  );
};

export default Formulario;
