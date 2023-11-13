const fs = require('fs')

console.log("Antes de criação da promessa...")

const promessa = new Promise((resolve, reject) => {
    fs.readFile("./arquivo.txt", (erro, conteudoDoArquivo) => {
        if (erro) {
            reject("Um erro ocorreu: ", erro)
        } else {
            resolve(String(conteudoDoArquivo))
        }
    })
})

promessa.then((retornoDaPromessa) => {
    console.log("Retorno: " + retornoDaPromessa)
})

