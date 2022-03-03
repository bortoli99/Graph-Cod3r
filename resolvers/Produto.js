module.exports = {
    precoComDesconto(produto){
        var valorDesconto = produto.preco * produto.desconto
        var valorAtual = produto.preco - valorDesconto
        return valorAtual
    }
}