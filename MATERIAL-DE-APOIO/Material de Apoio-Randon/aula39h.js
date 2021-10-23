
    // Math.random() gera aleatoriamente um número >=0 e <1.
    // cada vez que o comando é executado um número >=0 e <1 é sorteado.

    function sortear() {
        var ax_num = Math.random();
        var ax_ini = Number(ipt_inic.value);
        var ax_fim = Number(ipt_fim.value);
        div_result.innerHTML += `Número sorteado = ${(ax_num)} Número transformado ${ax_num*(ax_fim-ax_ini)+ax_ini} O número arredondado  ${(ax_num*(ax_fim-ax_ini)+ax_ini).toFixed()} <br> `;
    }