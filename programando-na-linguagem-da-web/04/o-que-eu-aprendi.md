Escutando eventos:

Entendendo quando o usuário faz alguma ação com a página, clicar, scrollar, apertar o botão, soltar o botão,
passar com o mouse, etc. Tudo isso pode ser "escutado" com o javascript, com os eventos.

```javascript
let $botao = document.querySelector(".botao");

//Função anônima
$botao.addEventListener("click", function(event) {
    event.preventDefault();
    alertClick();
})

ou 
    
//shortcut function + funcao de primeira classe 
$botao.onclick = alertClick

ou

$botao.onclick = function(event) {
    event.preventDefault();
    alert("Fui clicado!")
}

ou

//Referencia da função nomeada
$botao.addEventListener("click", alertClick)

function alertClick() {
    alert("Fui clicado!")
}

```

Caracteristicas do JS, quando por exemplo um form é obtido pelo querySelector todos os campos são 
acessados pelo atributo name:

``` javascript
let $form = document.querySelector("form");
$form.nome.value //Aqui é obtido o valor do campo do form
```

Criando um elemento e adicionando um elemento como filho de outro elemento, exemplo:

```javascript
let $linha = document.createElement("tr")
$linha.appendChild(document.querySelector("td"))
```