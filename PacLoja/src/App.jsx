import React, { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Categoria from "./components/Categoria/Categoria";

function App() {

  const Categorias = [
    {
        nome: 'Computadores',
        corPrimaria: '#57c278',
        corSecundaria: '#d9f7e9'
    },
    {
        nome: 'Acessórios',
        corPrimaria: '#82cffa',
        corSecundaria: '#e8f8ff'
    },
    {
        nome: 'Impressoras',
        corPrimaria: '#a6d157',
        corSecundaria: '#f0f8e2'
    },
    {
        nome: 'Games',
        corPrimaria: '#e06b69',
        corSecundaria: '#fde7e8'
    },
    {
        nome: 'Gadgets',
        corPrimaria: '#d69be8',
        corSecundaria: '#f5e8fa'
    }
];

  const listaCategorias = Categorias.map( categoria => categoria.nome );
	const [produtos, setProdutos] = useState( [] )

  const adicionaProduto = (prod) => {
    const listaNova = produtos.slice();
    listaNova.push(prod)
    setProdutos( listaNova )
  }

	return (
    <div>
      <Banner />
      <Formulario categorias={listaCategorias} aoProdutoCadastrado={prod => adicionaProduto(prod)} />

      { Categorias.map(categoria => <Categoria 
                                key={categoria.nome}
                                nome={categoria.nome}
                                corPrimaria={categoria.corPrimaria}
                                corSecundaria={categoria.corSecundaria}
                                produtos={ produtos.filter( prod => prod.categoria === categoria.nome ) }
                          />) 
      }

    </div>
  );
}

export default App;

