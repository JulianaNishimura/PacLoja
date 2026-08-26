import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import ListaProdutos from "./components/ListaProdutos/ListaProdutos";

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
      <Formulario aoProdutoCadastrado={(produto) => adicionaProduto(produto)} />
      <ListaProdutos produtos={produtos} />
    </div>
  );
}

export default App;
