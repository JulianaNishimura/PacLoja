import "./Categoria.css";
import Marca from "../Marca/Marca";

const Categoria = ({ nome, corPrimaria, corSecundaria, produtos }) => {
  if (produtos.length === 0) return null;

  const corDeFundo = { backgroundColor: corSecundaria };
  const corSublinhado = { borderColor: corPrimaria };
  const marcas = [...new Set(produtos.map((produto) => produto.marca))];

  return (
    <section className="categoria" style={corDeFundo}>
      <h3 style={corSublinhado}>{nome}</h3>
      <div className="marcas">
        {marcas.map((marca) => (
          <Marca
            key={marca}
            nome={marca}
            produtos={produtos.filter((produto) => produto.marca === marca)}
          />
        ))}
      </div>
    </section>
  );
};

export default Categoria;