
    function arredondar() {
        var ax_divisao = Number(in_numero.value) / 3;
        div_resultado.innerHTML = `O número informado foi: ${in_numero.value} <br>
            Esse número divido por 3 dá: ${ax_divisao} <br>
            Ele arredondado com duas casas decimais é: ${ax_divisao.toFixed(2)}`;
    }
