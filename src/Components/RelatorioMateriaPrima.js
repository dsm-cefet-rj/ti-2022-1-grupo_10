import MateriaPrimaContainer from "./MateriaPrimaContainer";

const RelatorioMateriaPrima = ({materiaPrima}) => {
    /*const [materiaPrima, setMateriaPrima] = useState([
        {
            id: 1,
            name: "Corda",
            count: 30,
            price: 0.50
        },
        {
            id: 2,
            name: "Joia",
            count: 5,
            price: 15.00
        },
    ]);*/

    return(
        <>
            <div id="relatorio">
                <h1>MATERIA PRIMA</h1>
                <div className="container-report">
                    <MateriaPrimaContainer materiaPrima={materiaPrima}/>
                </div>
            </div>
        </>
    )
}

export default RelatorioMateriaPrima;