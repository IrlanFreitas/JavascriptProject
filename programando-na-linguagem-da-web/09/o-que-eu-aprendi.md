AJAX - Javascript Assíncrono e XML

Recurso do Javascript para fazer requisições assíncronas de informações pela WEB.

O que foi estudado no curso, fica melhor entendido com
os comentários que fiz sobre a resolução do exercício, eu imagino.

```javascript

let btnBuscarPacientes = document.querySelector("#buscar-pacientes");
let urlPacientes = "http://api-pacientes.herokuapp.com/pacientes";

//Objeto responsável por realizar requisições não somente XML
let xhr = new XMLHttpRequest();

btnBuscarPacientes.addEventListener("click", function(event) {
  event.preventDefault();

  console.log("Buscando pacientes...");

  //Ensinando o tipo de requisição e para onde é
  xhr.open("GET", urlPacientes);

  //Utilizando o evento de load para saber
  //quando a resposta foi retornada
  xhr.addEventListener("load", integracaoPacientes);

  //Fazendo a requisição
  xhr.send();
});

function integracaoPacientes(data) {
  //Status da requisição serve para
  //saber se está tudo certo
  //caso tenha algum problema
  //será indicado aqui
  if (xhr.status == 200) {

    $spanErro.classList.add("esconder");
    //responseText, utilizando para obter os valores do
    //retorno da API.
    // console.log(xhr.responseText);

    //Obtem todo o conteúdo do JSON e "transforma" em lista
    //poderia ser objeto...
    let pacientes = JSON.parse(xhr.response);

    pacientes.forEach(paciente => {
      adicionaPacienteTabela(paciente);
    });

    console.log("Pacientes obtidos com secusso!");
  } else {
    indicarErro()
  }
}

function indicarErro() {
  var $spanErro = document.querySelector("#erro-ajax");

  $spanErro.classList.remove("esconder");
  $spanErro.textContent +=
    "Há algo de errado com a integração, por favor vefiricar:  " +
    xhr.status +
    ":" +
    xhr.statusText;

  setTimeout( function() {
    $spanErro.innerHTML = ""
  }, 3000);
}
```