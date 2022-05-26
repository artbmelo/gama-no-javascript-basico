console.log('Javascript carregado.');

function validaCPF(cpf) {
    // Validando a quantidade de dígitos.
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        console.log(numeros);
        console.log(digitos);

        // VALIDAÇÃO DO PRIMEIRO DÍGITO
        // Multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados.
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        console.log(resultado);

        // Validação do primeiro dígito.
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        // Zerando o valor da variável 'soma'.
        soma = 0;

        // Estabelecendo um novo escopo: 10 primeiros dígitos.
        // Atribui esses dígitos à variável 'numeros'.
        numeros = cpf.substring(0, 10);

        // Multiplica-se os 10 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados.
        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        // Validação do segundo dígito.
        if(resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }
}

function validacao() {
    console.log('Iniciando validação CPF.');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    // Verificando se o CPF é válido.
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao == true) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

