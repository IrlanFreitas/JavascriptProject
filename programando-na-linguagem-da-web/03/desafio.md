## Desafio 03

```html
<!DOCTYPE html>
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
			<tr>
				<td>...</td>
				<td>...</td>
				<td>...</td>
				<td>...</td>
				<td>...</td>
				<td>...</td>
			</tr>
		</tbody>
	</table>


	<script type="text/javascript">
		const data = [];

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

	</script>
</body>
</html>
```
