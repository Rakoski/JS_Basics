const numeros = [80, 90, 75, 43, 27, 58]
const lastIndex = numeros.length - 1;

numeros.forEach((item, index, arrayCompleto) => {
    console.log(`Index do ${item}: ` + index)
    if (lastIndex === index) {
        console.log("Array completo " + arrayCompleto)
    }
})



// é a mesma coisa que usar um forof

// for (const elemento of numeros) {
//     console.log(elemento)
// }