const carrinhoDeCompras = [
    { produto: "Maçãs", preco: 2.50, quantidade: 3 },
    { produto: "Pão", preco: 1.50, quantidade: 2 },
    { produto: "Leite", preco: 3.00, quantidade: 1 },
    { produto: "Arroz", preco: 5.50, quantidade: 4 },
];

const carrinhoComTotal = carrinhoDeCompras.map((itemDoCarrinho) => {
    return {
        ...itemDoCarrinho,
        total: itemDoCarrinho.preco + itemDoCarrinho.quantidade
    }
})

console.log(carrinhoComTotal)
