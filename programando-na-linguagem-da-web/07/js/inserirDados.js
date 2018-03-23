function inserirPessoas(pessoas) {

    let pessoa2
    let nomeQualquer = "John"

    for (let index = 0; index < pessoas.length; index++) {
        if (pessoas[index].lastName == "Morris") {
            pessoa2 = JSON.parse(JSON.stringify(pessoas[index]))
        }
    }

    pessoa2._firstName = nomeQualquer
    pessoa2._avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XDFpnTyrmOzl2Is1fkSI_lXJ1ERXqpDE-93lvGsiC9uCp-r65g'

    pessoas.push(new Pessoa(pessoa2._id, pessoa2._firstName, pessoa2._lastName, pessoa2._avatar))

    pessoas.forEach(pessoa => {
        corpoTabela.appendChild(criarLinha(pessoa))
    });

}