## Desafio 02 (Solução)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>02 - Desafio</title>

    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            width: 100%;
            background-color: red;
            text-align: center;
        }

        ul li {
            list-style: none;
            width: 30%;
            padding: 0.5rem;
            margin: 0.5rem;
            border: 1pt dashed silver;
            display: inline-block;
        }
    </style>
</head>

<body>
    <ul>
        <li>11</li>
        <li>4</li>
        <li>5</li>

        <li class="item">6</li>
        <li class="item">1</li>
        <li class="item">3</li>
    </ul>

    <div>Resultado:
        <span></span>
        <br>
        <span class="resultado"></span>
    </div>


    <script type="text/javascript">
		/* As variáveis no Javascript + Os operadores aritméticos + Precedência de operadores
		 *
		 * Crie variáveis que armaze os valores das listas, e calcular:
		 *
		 * (_Somar os items da primeira linha)
		 * (Multiplicar o _valor obtido pelo último item da segunda linha)
		 * (Dividir o _valor obtido pelo primeiro item da segunda linha)
		 * (Subtrair o _valor obtido pelo segundo item da segunda linha)
		 * 
		 * Exibir o valor obtido dentro da tag (span)
		 */

        /* Os operadores lógicos
        *
        * Atenção para algumas regras:
        *
        * Se o valor for < 10, o _valor é: `Valor menor do que o esperado`
        * Se o valor for = 10, o _valor é: `Valor próximo ao esperado`
        * Se o valor for > 10, o _valor é: `Valor esperado`
        * 
        * Exibir a frase acima, conforme regra na tag span (._valor)
        */

        var $valoresPrimeiraLinha = document.querySelectorAll("li:not(.item)")
        var $valoresSegundaLinha = document.querySelectorAll("li.item")
        var $exibeFraseSpan = document.querySelector("span.resultado")

        function calcularValoresPrimeiraLinha() {
            let _soma = 0;
            $valoresPrimeiraLinha.forEach(function (item) {
                _soma += Number(item.textContent)
            })
            return _soma
        }

        function calcularValoresSegundaLinha() {
            var _valor = calcularValoresPrimeiraLinha();

            for (let i = 0; i < $valoresSegundaLinha.length; i++) {
                if (i === 0) {
                    _valor = _valor / Number($valoresSegundaLinha[i].textContent)
                }
                else if (i === 1) {
                    _valor = _valor - Number($valoresSegundaLinha[i].textContent)
                }
                else {
                    _valor = _valor * Number($valoresSegundaLinha[i].textContent)
                }
            }

            return _valor
        }

        function validarValor(valor) {
            let _resposta

            if (valor < 10) {
                _resposta = "Valor menor do que o esperado"
            }
            else if (valor === 10) {
                _resposta = "Valor próximo ao esperado"
            }
            else {
                _resposta = "Valor esperado"
            }
            console.log(_resposta);
            
            return _resposta
        }

        function imprimeResultado(valor) {
            document.querySelector("span").textContent = Number(valor).toFixed(0);
            $exibeFraseSpan.textContent = validarValor(valor)
        }

        imprimeResultado(calcularValoresSegundaLinha())

        /*
        Considerações:
        // Hoisting do JS - https://felipenmoura.com/articles/hoisting-no-javascript/
        // boas práticas na criação de variáveis
        // entenda a diferença entre (var vs let vs const) - http://www.matera.com/br/2017/05/09/javascript-6-diferenca-entre-var-let-e-const/
        // nome de variáveis que representam dados do DOM devem começar com $ (é só uma boa prática) (ex.: $$exibeFraseSpan)
        // nome de variáveis `privadas` devem começar com (underline) (ex.: _res)
        // funcões de primeira classe - https://medium.com/@angelorubin/javascript-first-class-function-fun%C3%A7%C3%B5es-de-primeira-classe-7ebf63d2c83a
        */

    </script>
</body>

</html>
```
