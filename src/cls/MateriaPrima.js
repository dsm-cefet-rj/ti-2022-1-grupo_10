class MateriaPrima{
    // constructor
    constructor(tipo, qtd, custo){
        this.tipo = tipo;
        this.qtd = qtd;
        this.custo = custo;
        this.qtdUsos = 0;
        this.qtdUsada = 0;
    }
}

export default MateriaPrima;