class Produto {

    get lucro() {
        return this.custo * this.preco;
    }
    
    constructor(id, tipo, qtd, custo, preco, produzidos, vendidos, mpList) {
        this.id = id;
        this.tipo = tipo;
        this.qtd = qtd;
        this.custo = custo;
        this.preco = preco;
        this.produzidos = produzidos;
        this.vendidos = vendidos;
        this.mpList = mpList;
    }
}

export default Produto;