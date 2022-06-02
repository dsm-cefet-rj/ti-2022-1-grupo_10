class MateriaPrima{
    // constructor
    constructor(id, tipo, qtd, fornecedor, custo){
        this.id = id;
        this.tipo = tipo;
        this.qtd = qtd;
        this.fornecedor = fornecedor;
        this.custo = custo;
        this.qtdUsos = 0;
    }
}

export default MateriaPrima;