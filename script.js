console.log('Javascript carregado.');

function validaCPF(cpf) {
    // Validando a quantidade de dígitos.
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        // VALIDAÇÃO DO PRIMEIRO DÍGITO
        // Multiplica-se of 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados.
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        // Validação do primeiro dígito.
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        console.log(
            digitos.toString().charAt(0) + " é a primeira posição da variável soma"
        );

        return true;
    }
}

function validacao() {
    console.log('Iniciando validação CPF.');

    var cpf = document.getElementById('cpf_digitado').value;

    // Verificando se o CPF é válido.
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao == true) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

