import "./Area.css";
import Professor from "../Professor/Professor";

const Area = (props) => {

  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  return (

    (props.produtos.length > 0) ? <section className="area" style={corDeFundo}>

      <h3 style={corSublinhado}>{props.nome}</h3>

      <div className="professores">

        {props.produtos.map( produto => <Professor
                                            key={produto.nome}
                                            nome={produto.nome}
                                            titulo={produto.marca}
                                            preco={produto.preco}
                                        /> )}

      </div>

    </section>

    : ''
    
  );

};

export default Area;