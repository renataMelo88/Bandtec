

    // Math.random() gera aleatoriamente um número >=0 e <1.
    // cada vez que o comando é executado um número >=0 e <1 é sorteado.

    function sortear() {
        var ax_num = Math.random();
        if (ax_num >= 0.5) {
            div_result.innerHTML += `Para o número sorteado ${ax_num} eu arredondaria para 1 e o toFixed arredondou para ${ax_num.toFixed()} <br>`;
        } else {
            div_result.innerHTML += `Para o número sorteado ${ax_num} eu arredondaria para 0 e o toFixed arredondou para ${ax_num.toFixed()} <br>`;
        }
    }
