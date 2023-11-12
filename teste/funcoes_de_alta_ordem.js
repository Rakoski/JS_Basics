function bemVindo(nomeDoCurso) {
    return (nomeDoEstudante) => {
        console.log(
            `bem vindo ${nomeDoEstudante} ao curso de ${nomeDoCurso}`
        )
    }
}

const cursoDeIngles = bemVindo("CursoDeIngles")

cursoDeIngles("Mateus")