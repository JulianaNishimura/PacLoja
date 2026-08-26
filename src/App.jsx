import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Categoria from "./components/Categoria/Categoria";

function App() {
  const [produtos, setProdutos] = useState([]);

  const adicionaProduto = (produto) => {
    const listaNova = produtos.slice();
    listaNova.push(produto);
    setProdutos(listaNova);
  };

  return (
    <div>
      <Banner />
      <Formulario aoProdutoCadastrado={(produto) => adicionaProduto(produto)}/>

      {categorias.map((categoria) => (
        <Categoria
          key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          produtos={produtos.filter(
            (produto) => produto.categoria === categoria.nome,
          )}
        />
      ))}
    </div>
  );
}

export default App;
