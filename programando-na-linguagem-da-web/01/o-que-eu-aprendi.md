Linguagem padrão dos browsers.

Permite que o usuário possa interagir com a página.

Multiparadigma - Funcional, Estruturada, Orientada a Objetos, Reativa.

Interatividade - Proporciona uma experiencia dinamica para o usuário.

Multiplataforma - Com o node.js, electron, Johnny-Five(arduino), MongoDB.

DOM - Document Object Model, representação do html já renderizado que pode ser manipulado no javascript.

`document.querySelector()` - Comando para obter o componente do html que se está interessado, para ser manipulado em javascript e assim possa ser atribuído para uma variavel

Pode ser passado como paramentro para o `querySelector` tag, classes, ids, seletores baseados no css.

Importante: É necessário que se carregue o script depois que a página foi renderizada, nesse caso, importar o js no final ou usando um document.ready(), dentro do js

Depois de utilizar o `querySelector` e obter uma determinada parte do DOM é possível manipular como mudar um texto do título do site, como:

```javascript
var titulo = document.querySelector("h1");
titulo.textContent; - Dessa forma obtem o valor
titulo.textContent = "Novo título"; - Modificando o valor

document.querySelector("h1").textContent = "Padawan" // Uma forma mais simples.
```

Uma boa prática é utilizar o `querySelector` ligado a class, id ou seletores, para que o código não fique atrelado a estrutura do html.