document.querySelector('h1').textContent = 'Irlan Padawan';
document.querySelector('title').textContent = 'Irlan';

function mensagemErroImc(mensagem, pacienteDOM) {
  pacienteDOM.classList.add('campo-invalido'); //
  pacienteDOM.querySelector('.info-imc').textContent = mensagem;
}

function validarPesoPaciente(paciente) {
  if (paciente.peso > 0 && paciente.peso < 300) {
    return true;
  }
  return false;
}

function validarAlturaPaciente(paciente) {
  if (paciente.altura > 0 && paciente.altura < 3) {
    return true;
  }
  return false;
}

function obterPaciente(pacienteDOM) {
  return (paciente = {
    nome: pacienteDOM.querySelector('.info-nome').textContent,
    peso: pacienteDOM.querySelector('.info-peso').textContent,
    altura: pacienteDOM.querySelector('.info-altura').textContent,
    gordura: pacienteDOM.querySelector('.info-gordura').textContent,
    imc: pacienteDOM.querySelector('.info-imc')
  });
}

function calculaImc(pacienteDOM) {
  let _paciente = obterPaciente(pacienteDOM);
  let _pesoValido = validarPesoPaciente(_paciente);
  let _alturaValida = validarAlturaPaciente(_paciente);

  if (_pesoValido && _alturaValida) {
    //Calculando o IMC e arredondando as casas decimais.
    // .textContent, deve ser utilizado diretamente para modificação de valor
    _paciente.imc.textContent = (
      _paciente.peso /
      (_paciente.altura * _paciente.altura)
    ).toFixed(2);
  } else if (!_pesoValido) {
    mensagemErroImc('Peso inválido', pacienteDOM);
  } else {
    mensagemErroImc('Altura inválida', pacienteDOM);
  }
}

const $pacientes = document.querySelectorAll('.paciente');

$pacientes.forEach(function(paciente) {
  calculaImc(paciente);
});
