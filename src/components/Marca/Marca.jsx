import "./Marca.css";
import Produto from "../Produto/Produto";

const Marca = ({ nome, produtos }) => {
  if (produtos.length === 0) return null;

  return (
    <section className="marca">
      <h3>{nome}</h3>
      <div className="produtos">
        {produtos.map((produto) => (
          <Produto
            key={produto.nome}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
            conservacao={produto.conservacao}
          />
        ))}
      </div>
    </section>
  );
};

export default Marca;