import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Area/Area";

function App() {

    const areas = [
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

    const listaAreas = areas.map(area => area.nome);

    const [produtos, setProdutos] = useState([]);

    const adicionaProduto = (produto) => {

        const listaNova = produtos.slice();

        listaNova.push(produto);

        setProdutos(listaNova);
    }

    return (
        <div>

            <Banner />

            <Formulario
                areas={listaAreas}
                aoProdutoCadastrado={produto => adicionaProduto(produto)}
            />

            {areas.map(area => (
                <Area
                    key={area.nome}
                    nome={area.nome}
                    corPrimaria={area.corPrimaria}
                    corSecundaria={area.corSecundaria}
                    produtos={produtos.filter(
                        produto => produto.area === area.nome
                    )}
                />
            ))}

        </div>
    );
}

export default App;