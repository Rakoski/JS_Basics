const numeros = [80, 90, 75, 43, 27, 58]

numeros.forEach((elemento) => {
    console.log(elemento)
})

// é a mesma coisa que usar um forof

for (const elemento of numeros) {
    console.log(elemento)
}