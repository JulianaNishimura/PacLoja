import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import { categorias, marcas } from "../../data/dados";
import logosMarcas from "../../data/logosMarcas";

const nomesCategorias = categorias.map((categoria) => categoria.nome);
const LOGO_PADRAO = "/img/logo-padrao.png"; 

const Formulario = ({ aoProdutoCadastrado }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [conservacao, setConservacao] = useState("");
  const [categoria, setCategoria] = useState(nomesCategorias[0]);
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

    aoProdutoCadastrado({
      nome,
      preco,
      categoria,
      marca,
      conservacao,
      imagem: logosMarcas[marca] || LOGO_PADRAO,
    });

    setNome("");
    setPreco("");
    setCategoria(nomesCategorias[0]);
    setMarca(marcas[0]);
  };

  const mudaConservacao = (evento) => {
    setConservacao(evento.target.value);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto:</h2>

        <ListaSuspensa
          label="Categorias"
          itens={nomesCategorias}
          valor={categoria}
          aoAlterado={setCategoria}
        />

        <ListaSuspensa
          label="Marca"
          itens={marcas}
          valor={marca}
          aoAlterado={setMarca}
        />

        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={setNome}
        />

        <CampoTexto
          label="Preço"
          placeholder="Digite o preço"
          valor={preco}
          aoAlterado={setPreco}
        />

        <label>
          <input
            type="radio"
            name="conservacao"
            value="novo"
            checked={conservacao === "novo"}
            onChange={mudaConservacao}
          />{" "}
          Novo
        </label>

        <label>
          <input
            type="radio"
            name="conservacao"
            value="usado"
            checked={conservacao === "usado"}
            onChange={mudaConservacao}
          />{" "}
          Usado
        </label>

        <div className="preview-logo-marca">
          <img
            src={logosMarcas[marca] || LOGO_PADRAO}
            alt={`Logo da marca ${marca}`}
          />
          <span>Logo que será usada para {marca}</span>
        </div>

        <Botao>Cadastrar Produto</Botao>
      </form>
    </section>
  );
};

export default Formulario;