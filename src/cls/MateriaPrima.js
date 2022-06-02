class MateriaPrima{
    // constructor
    constructor(id, tipo, qtd, custo){
        this.id = id;
        this.tipo = tipo;
        this.qtd = qtd;
        this.custo = custo;
        this.qtdUsos = 0;
    }
}

export default MateriaPrima;