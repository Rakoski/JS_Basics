function bemVindo(nomeDoCurso) {
    return (nomeDoEstudante) => {
        console.log(
            `bem vindo ${nomeDoEstudante} ao curso de ${nomeDoCurso}`
        )
    }
}

const cursoDeIngles = bemVindo("CursoDeIngles")

cursoDeIngles("Mateus")

const people = [
    { name: "Alice", age: 15, hobby: "Reading" },
    { name: "Bob", age: 30, hobby: "Gardening" },
    { name: "Charlie", age: 22, hobby: "Painting" },
    { name: "David", age: 9, hobby: "Cooking" }
];

const pegaTodasPessoasMaioresDeIdade = people.filter(person => person.age >= 18)

console.log(pegaTodasPessoasMaioresDeIdade)

const todasPessoasSaoMaioresDeIdade = people.every((people) => people.age > 18)

console.log(todasPessoasSaoMaioresDeIdade)

