class Produto {
    // getters
    get lucro(){
        return this.preco-this.custo;
    }

    // methods
    aumentaVendas(){
        this.qtdVendas++;
    }
    
    // constructor
    constructor(tipo, qtd, custo, preco, mpUsadas /* array de mp's */){
        this.tipo = tipo;
        this.qtd = qtd;
        this.custo = custo;
        this.preco = preco;
        this.mpUsadas = mpUsadas;
        this.qtdVendas = 0;
    }
}