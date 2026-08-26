import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, itens, valor, aoAlterado }) => {
  const aoEscolhido = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select value={valor} onChange={aoEscolhido}>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;