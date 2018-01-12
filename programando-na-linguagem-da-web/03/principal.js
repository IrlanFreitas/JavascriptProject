document.querySelector("h1").textContent = "Irlan Padawan"
document.querySelector("title").textContent = "Irlan"

function mensagemErroImc(mensagem, paciente) {
    paciente.classList.add("campo-invalido") //
    paciente.querySelector(".info-imc").textContent = mensagem
}

function validarPesoPaciente(paciente) {
    if (paciente.peso > 0 && paciente.peso < 300) {
        return true
    }
    return false

}

function validarAlturaPaciente(paciente) {
    if (paciente.altura > 0 && paciente.altura < 3) {
        return true
    }
    return false
}

function obterPaciente(paciente) {
    return paciente = {
        nome: paciente.querySelector(".info-nome").textContent,
        peso: paciente.querySelector(".info-peso").textContent,
        altura: paciente.querySelector(".info-altura").textContent,
        gordura: paciente.querySelector(".info-gordura").textContent,
        imc: paciente.querySelector(".info-imc")
    }
}

function calculaImc(paciente) {

    let _paciente = obterPaciente(paciente)
    let _pesoValido = validarPesoPaciente(_paciente)
    let _alturaValida = validarPesoPaciente(_paciente)

    if (_pesoValido && _alturaValida) {
        //Calculando o IMC e arredondando as casas decimais.
        // .textContent, deve ser utilizado diretamente para modificação de valor
        _paciente.imc.textContent = (_paciente.peso / (_paciente.altura * _paciente.altura)).toFixed(2)
    } else if (!_pesoValido) {
        mensagemErroImc("Peso inválido", paciente)
    } else {
        mensagemErroImc("Altura inválida", paciente)
    }


}

const $pacientes = document.querySelectorAll(".paciente")

$pacientes.forEach(function (paciente) {
    calculaImc(paciente)
})


