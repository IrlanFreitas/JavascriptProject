"use strict"
let corpoTabela = document.querySelector("#tabela-pessoas tbody")

function criarColuna(dado) {
    let coluna = document.createElement("td")
    coluna.textContent = dado
    return coluna
}

function criarColunaImagem(dado) {
    let coluna = document.createElement("td")
    let imagem = document.createElement("img")

    imagem.setAttribute("src", dado)
    imagem.setAttribute("width", "128px")
    imagem.setAttribute("height", "128px")
    coluna.appendChild(imagem)
    return coluna
}

function criarLinha(pessoa) {
    let linha = document.createElement("tr")
    linha.appendChild(criarColuna(pessoa.id))
    linha.appendChild(criarColuna(pessoa.firstName))
    linha.appendChild(criarColuna(pessoa.lastName))
    linha.appendChild(criarColunaImagem(pessoa.avatar))
    return linha
}