import { createSlice } from '@reduxjs/toolkit'

const initialProduto = [{
    id: 1, 
    nomeProduto: 'Brinco', 
    qtdProduto: 2, 
    custoProduto: 25, 
    valorProduto: 30,
    Produzidos: 0,
    Vendidos: 0
}]

function addProdutoReducer(produtos, produto){
    let proxId = 1 + produtos.map(p => p.id).reduce((x,y) => Math.max(x,y));
    return produtos.concat([{...produto, id: proxId, Produzidos:0, Vendidos: 0}]);
}

function produzirReducer (produtos, {nome,qtd}){

    return produtos.map((produto) => {
        if (produto.nomeProduto !== nome){
            return produto
        }
        return {
            ...produto,qtdProduto:parseInt(produto.qtdProduto)+parseInt(qtd),Produzidos:parseInt(produto.Produzidos)+parseInt(qtd)
        }
    })

}
function venderReducer (produtos, {nome,qtd}){
    
    return produtos.map((produto) => {
        if (produto.nomeProduto !== nome){
            return produto
        }
        return {
            ...produto,qtdProduto:parseInt(produto.qtdProduto)-parseInt(qtd),Vendidos:parseInt(produto.Vendidos)+parseInt(qtd)
        }
    })
}


export const produtosSlice = createSlice(
    {
        name: 'CadastroProduto',
        initialState: initialProduto,
        reducers: {
            addProduto: (state , action) => addProdutoReducer (state, action.payload),
            Produzir: (state, action) => produzirReducer (state, action.payload),
            Vender: (state, action) => venderReducer (state, action.payload),
        }
    }
)

export const { addProduto, Produzir, Vender } = produtosSlice.actions

//useSelector((state) => state.produtos.id)
//useSelector((state) => state.produtos.nomeProduto)
//useSelector((state) => state.produtos.qtdProduto)
//useSelector((state) => state.produtos.custoProduto)
//useSelector((state) => state.produtos.valorProduto)

export default produtosSlice.reducer

  