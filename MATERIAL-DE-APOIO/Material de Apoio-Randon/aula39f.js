

    // Math.random() gera aleatoriamente um número >=0 e <1.
    // cada vez que o comando é executado um número >=0 e <1 é sorteado.

    function sortear() {
        var ax_num = Math.random();
        div_result.innerHTML += `Número sorteado = ${(ax_num)} Número transformado ${ax_num*20+10} O número arredondado  ${(ax_num*20+10).toFixed(1)} <br> `;
    }
