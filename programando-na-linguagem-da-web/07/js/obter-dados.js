'use strict'

let xhr = new XMLHttpRequest();


xhr.open("GET", "https://reqres.in/api/users?page=2", true);

xhr.send();

xhr.onload = obterDados

function obterDados(dados) {
    if (dados.currentTarget.status == 200) {
        let pessoas = new Array()
        var response = JSON.parse(dados.currentTarget.response)

        response.data.forEach(function(dado) {
            pessoas.push(new Pessoa(dado.id, dado.first_name, dado.last_name, dado.avatar))
        })

        inserirPessoas(pessoas)
    }
}