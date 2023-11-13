const numeros = [1, 2, 3, 4, 5]

console.log(numeros.reduce((acumulador, currentValue, _, array) => {
    // a cada iteração retorna o elemento que você ta percorrendo, mais o acumulador
    let tamanho = array.length
    return currentValue / tamanho + acumulador
}, 0))

const somaDosPares = numeros.reduce((cumulator, currentValue, currentIndex, array) => {
    console.log(cumulator)
    if (currentValue % 2 === 0) {
        return currentValue + cumulator
    }
    return cumulator
}, 0)

console.log("A soma dos pares é: " + somaDosPares)