const pessoa = {
    nome: 'Mateus',
    idade: 27,
    hobbies: {jogos: "Jogar FIFA", exercicio: "Academia", livros: "Harry Potter"},
    amigos: [
        {
        nome: "João",
        idade: 18,
        hobbies: {jogos: "Jogar Valorant", exercicio: "Correr", livros: "Jules Verne"},
        },
        {
            nome: "Lucas",
            idade: 20,
            hobbies: {jogos: "Jogar CSGO", exercicio: "Bicicleta", livros: "Sapiens"},
        },
    ]
}

function funcao(array) {
    let acc = 0;

    for (let elemento of array) {
        acc += elemento;
    }

    return (acc / array.length);
}

console.log(funcao([4, 6, 4, 2]));

console.log(pessoa.amigos[1].hobbies.jogos)