import "./Produto.css";

const Produto = ({ nome, preco, imagem, conservacao }) => {
  return (
    <div className="produto">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h4>R$ {preco}</h4>
        <h5>{conservacao}</h5>
      </div>
    </div>
  );
};

export default Produto;