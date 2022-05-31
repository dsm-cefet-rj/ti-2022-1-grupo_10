class Produto {
    // getters
    get lucro(){
        return this.preco-this.custo;
    }

    // methods
    aumentaVendas(){
        this.qtdVendas++;
    }

    produzir(){
        this.qtd++;
        this.mpUseArr.forEach(this.checkUsingMateriaPrima);
    }

    checkUsingMateriaPrima(materiaPrima){
        materiaPrima.qtd--;        
    }
    
    // constructor
    constructor(tipo, qtd, custo, preco, mpUseArr /* array de mp's usadas: string */, mpArr /* array de mp's cadastradas: object */){
        this.tipo = tipo;
        this.qtd = qtd;
        this.custo = custo;
        this.preco = preco;
        this.mpUseArr = mpUseArr;
        this.mpArr = mpArr;
        this.qtdVendas = 0;
    }
}