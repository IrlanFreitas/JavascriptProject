function inserirPessoas(pessoas) {

    let pessoa2

    for (let index = 0; index < pessoas.length; index++) {
        if (pessoas[index].lastName == "Morris") {
            pessoa2 = JSON.parse(JSON.stringify(pessoas[index]))
        }
    }

    function clone(obj) {
        if (null == obj || "object" != typeof obj) return obj;
        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
            }
            return copy;
        }

        return copy;
    }

    console.log(pessoa2);

    pessoa2._firstName = "John"
    pessoa2._avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XDFpnTyrmOzl2Is1fkSI_lXJ1ERXqpDE-93lvGsiC9uCp-r65g'

    pessoas.push(new Pessoa(pessoa2._id, pessoa2._firstName, pessoa2._lastName, pessoa2._avatar))

    console.log(pessoas);

    pessoas.forEach(pessoa => {
        corpoTabela.appendChild(criarLinha(pessoa))
    });

    // let aux = true
    // for (let index = 0; index < pessoas.length; index++) {

    //     if ((pessoas[index].firstName == "Charles" && pessoas[index].lastName == "Morris") && aux == true) {
    //         aux = false
    //     } else if (pessoas[index].lastName == "Morris" && aux == false) {
    //         pessoas[index]._firstName = "John"
    //     } else {

    //     }

    // }


    // console.log(pessoas);


    // let aux = true
    // for (let index = 0; index < pessoas.length; index++) {

    //     if ((pessoas[index].firstName == "Charles" && pessoas[index].lastName == "Morris") && aux == true) {
    //         // pessoas[index]._avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XDFpnTyrmOzl2Is1fkSI_lXJ1ERXqpDE-93lvGsiC9uCp-r65g'
    //         corpoTabela.appendChild(criarLinha(pessoas[index]))
    //         aux = false
    //     } else if (pessoas[index].lastName == "Morris" && aux == false) {
    //         pessoas[index]._firstName = "John"
    //         corpoTabela.appendChild(criarLinha(pessoas[index]))

    //     } else {
    //         corpoTabela.appendChild(criarLinha(pessoas[index]))
    //     }

    // }

    // console.log(pessoas.length);

    // pessoas.forEach(pessoa => {
    //     if (pessoa.firstName == "John" && pessoa.lastName == "Morris") {
    //         pessoa._avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XDFpnTyrmOzl2Is1fkSI_lXJ1ERXqpDE-93lvGsiC9uCp-r65g'
    //         corpoTabela.appendChild(criarLinha(pessoa))
    //     }
    // })

}