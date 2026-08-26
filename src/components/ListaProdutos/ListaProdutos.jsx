import "./ListaProdutos.css";
import Categoria from "../Categoria/Categoria";
import { categorias } from "../../data/dados";

const ListaProdutos = ({ produtos }) => {
  return (
    <div className="lista-produtos">
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
};

export default ListaProdutos;