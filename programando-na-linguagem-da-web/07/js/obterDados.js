'use strict'

let xhr = new XMLHttpRequest();
let pessoas = new Array()

xhr.open("GET", "https://reqres.in/api/users?page=2", true);

xhr.send();

xhr.onload = obterDados

function obterDados(dados) {
    if (dados.currentTarget.status == 200) {
        var response = JSON.parse(dados.currentTarget.response)

        response.data.forEach(function(dado) {
            console.log(dado.avatar);
            pessoas.push(new Pessoa(dado.id, dado.first_name, dado.last_name, dado.avatar))
        })

        inserirPessoas(pessoas)
    }
}