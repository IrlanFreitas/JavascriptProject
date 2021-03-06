## Desafio 03 (Solução)

```html
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>03 - Desafio</title>

    <style type="text/css">
        /*
		# CSS Preset - version 1.0.0
		*/

        * {
            box-sizing: border-box;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-kerning: auto;
        }

        html {
            font-family: sans-serif;
            -webkit-text-size-adjust: 100%;
        }

        body {
            margin: 0;
        }

        /* Generic table and results row colors */

        .generic_table {
            width: 100%;
        }

        .generic_table th {
            text-align: left;
        }

        .low-weight {
            background-color: #FFE164;
        }

        .overweight {
            background-color: #e67e22;
        }

        .obesity {
            background-color: #FB6E52;
        }
    </style>
</head>

<body>
    <table class="generic_table">
        <thead>
            <tr>
                <th>Altura</th>
                <th>Peso</th>
                <th>Gênero</th>
                <th>Idade</th>
                <th>IMC</th>
                <th>Categoria</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>


    <script type="text/javascript">
        "use strict";

        const data = [];
        const categorias = {
          baixoPeso: "Baixo peso",
          normal: "Normal",
          sobrepeso: "Sobrepeso",
          obesidade: "Obesidade"
        };
        const $tabelaPessoas = document.querySelector(".generic_table > tbody");

        /*
         * Calcular IMC de forma dinâmica
         *
         * Precisamos descobrir o IMC de crianças e adolescentes (6 a 15 anos)
         * Seguindo a tabela da imagem (https://goo.gl/r2Yv6p) transcreva qual o IMC
         * e em qual categoria cada criança se encaixa
         * 
         * == CODE ==
         * 1 - Adicione dados dinâmicos de (altura, peso, genero, idade)
         * a nossa constate (const data = [])
         * 1.1 - Os dados (altura e peso) devem ser valores de números racionais
         * maiores que zero
         * 1.2 - Os dados (genero) devem ser gerados conforme a tabela
         * ('F' = Feminino, 'M' = Masculino)
         * 1.3 - Os dados (idade) devem ser valores entre 6 e 15
         * Exemplo: { altura: 1.43, peso: 46.28, genero: 'F', idade: 14 }
         *
         * Deverão ser gerados dados para 10 pessoas
         * Todos os dados deverão ser exibidos na tabela (.generic_table)
         *
         * == RESULTADOS ==
         *
         * 1 - Nas linhas da tabela onde a categoria for (baixo peso),
         * deverá ser adicionado a classe (.low-weight)
         * 2 - Nas linhas da tabela onde a categoria for (sobrepeso),
         * deverá ser adicionado a classe (.overweight)
         * 3 - Nas linhas da tabela onde a categoria for (obesidade),
         * deverá ser adicionado a classe (.obesity)
         *
         * == DICAS ==
         * Math.random() - https://goo.gl/3dctsb
         */

        function calculaImc(peso, altura) {
          return (peso / Math.pow(2, altura)).toFixed(2);
        }

        function verificaCategoria(imc, genero, idade) {
          if (genero === "M") {
            switch (idade) {
              case 6:
                return classificarCategoria(imc, 14.5, 16.6, 18);
                break;
              case 7:
                return classificarCategoria(imc, 15, 17.3, 19.1);
                break;
              case 8:
                return classificarCategoria(imc, 15.6, 16.7, 20.3);
                break;
              case 9:
                return classificarCategoria(imc, 16.1, 18.8, 21.4);
                break;
              case 10:
                return classificarCategoria(imc, 16.7, 19.6, 22.5);
                break;
              case 11:
                return classificarCategoria(imc, 17.2, 20.3, 23.7);
                break;
              case 12:
                return classificarCategoria(imc, 17.8, 21.1, 24.8);
                break;
              case 13:
                return classificarCategoria(imc, 18.5, 21.9, 25.9);
                break;
              case 14:
                return classificarCategoria(imc, 19.2, 22.7, 26.9);
                break;
              case 15:
                return classificarCategoria(imc, 19.9, 23.6, 27.7);
                break;
            }
          } else {
            switch (idade) {
              case 6:
                return classificarCategoria(imc, 14.3, 16.1, 17.4);
                break;
              case 7:
                return classificarCategoria(imc, 14.9, 17.1, 18.9);
                break;
              case 8:
                return classificarCategoria(imc, 15.6, 18.1, 20.3);
                break;
              case 9:
                return classificarCategoria(imc, 16.3, 19.1, 21.7);
                break;
              case 10:
                return classificarCategoria(imc, 17, 20.1, 23.2);
                break;
              case 11:
                return classificarCategoria(imc, 17.6, 21.1, 24.5);
                break;
              case 12:
                return classificarCategoria(imc, 18.3, 22.1, 25.9);
                break;
              case 13:
                return classificarCategoria(imc, 18.9, 23, 27.7);
                break;
              case 14:
                return classificarCategoria(imc, 19.3, 23.8, 27.9);
                break;
              case 15:
                return classificarCategoria(imc, 19.6, 24.2, 28.8);
                break;
            }
          }
        }

        function classificarCategoria(imc, normal, sobrepeso, obesidade) {
          if (imc < normal) {
            return categorias.baixoPeso;
          } else if (imc >= normal && imc < sobrepeso) {
            return categorias.normal;
          } else if (imc >= sobrepeso && imc < obesidade) {
            return categorias.sobrepeso;
          } else {
            return categorias.obesidade;
          }
        }

        function geradorDeNumeros(min, max) {
          return Math.random() * (max - min) + min;
        }

        function geradorDeGenero() {
          return parseInt(Math.random() * 10) % 2 === 0 ? "M" : "F";
        }

        function getPessoa() {
          let _altura = geradorDeNumeros(1, 2).toFixed(2);
          let _peso = geradorDeNumeros(20, 55).toFixed(2);
          let _imc = calculaImc(_peso, _altura);
          let _genero = geradorDeGenero();
          let _idade = parseInt(geradorDeNumeros(6, 16));

          return {
            altura: _altura,
            peso: _peso,
            genero: _genero,
            idade: _idade,
            imc: _imc,
            cagetoria: verificaCategoria(_imc, _genero, _idade)
          };
        }

        function geradorDados(quantidade) {
          for (let index = 0; index < quantidade; index++) {
            data.push(getPessoa());
          }
        }

        function gerarColuna(texto) {
          // Fazendo dessa forma, acontece o erro abaixo.
          // Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
          // return document.createElement("td").textContent = texto

          let $campo = document.createElement("td");
          $campo.textContent = texto;
          return $campo;
        }

        function verificarClasseCategoria(categoria) {
          if (categoria === categorias.baixoPeso) {
            return "low-weight";
          } else if (categoria === categorias.sobrepeso) {
            return "overweight";
          } else {
            return "obesity";
          }
        }

        function adicionaLinha(pessoa) {
          let $linha = document.createElement("tr");

          $linha.appendChild(gerarColuna(pessoa.altura));
          $linha.appendChild(gerarColuna(pessoa.peso));
          $linha.appendChild(gerarColuna(pessoa.genero));
          $linha.appendChild(gerarColuna(pessoa.idade));
          $linha.appendChild(gerarColuna(pessoa.imc));
          $linha.appendChild(gerarColuna(pessoa.cagetoria));

          if (pessoa.cagetoria !== categorias.normal) {
            $linha.classList.add(verificarClasseCategoria(pessoa.cagetoria));
          }
          $tabelaPessoas.appendChild($linha);
        }

        geradorDados(10);

        data.forEach(function(dado) {
          adicionaLinha(dado);
        });
    </script>
</body>

</html>

```