`document.querySelector()` - Conseque obter qualquer elemento do DOM, porem, singularmente caso existam mais elementos no mesmo paramentro só retornará o primeiro

`document.querySelectorAll()` - Consegue obter todas as ocorrencias do seletor dentro dos paramentros e colocar em uma "lista", mas, é necessário tratar essa lista para obter o valor

Adiantando um pouco:

Obtive o valor de todos os elementos da lista pois, estão com a classe paciente e com isso e um laço de repetição, mudei todas as referencias com o imc calculado.

```javascript
var pacientes = document.querySelectorAll(".paciente")

// console.log(pacientes);

pacientes.forEach( function(paciente) {
    console.log(paciente)
    var peso = paciente.querySelector(".info-peso")
    var altura = paciente.querySelector(".info-altura").textContent
    //Calculando o IMC e arredondando as casas decimais.
    paciente.querySelector(".info-imc").textContent = (peso.textContent /(altura * altura)).toFixed(2)
})

// Aperfeiçoando a tecnica, é necessário que se valide os dados de peso e altura que está na tabela, com isso uma função para verificação foi criada:

pacientes.forEach(function (paciente) {
    calculaImc(paciente)
})

function calculaImc(paciente) {

    var valido = true
    var peso = paciente.querySelector(".info-peso").textContent
    var altura = paciente.querySelector(".info-altura").textContent
    var imc = paciente.querySelector(".info-imc")

    if (peso < 0 || peso > 300) {
        imc.textContent = "Peso inválido"
        // paciente.classList.add("campo-invalido")
        paciente.style.backgroundColor = "red";
        valido = false
    }
    if (altura < 0 || altura > 3) {
        imc.textContent += "\bl Altura inválida"
        // paciente.classList.add("campo-invalido") //Utilizando a classe
        paciente.style.backgroundColor = "red"; //Utilizando a propriedade
        valido = false
    }

    if (valido) {
        //Calculando o IMC e arredondando as casas decimais.
        // .textContent, deve ser utilizado diretamente para modificação de valor
        imc.textContent = (peso / (altura * altura)).toFixed(2)
    }

}
```
