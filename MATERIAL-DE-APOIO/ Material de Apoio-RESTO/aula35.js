
    function analisar() {
        var ax_saldo = Number(ipt_saldo.value);
        if (ax_saldo < 0) {
            div_msg.innerHTML = `Com o saldo de ${ax_saldo} o cliente ${ipt_nome.value} está com saldo devedor`;
        } else if (ax_saldo <= 2000) {
            div_msg.innerHTML = `Com o saldo de ${ax_saldo} o cliente ${ipt_nome.value} está com saldo NORMAL`;
        } else if (ax_saldo <= 5000) {
            div_msg.innerHTML = `Com o saldo de ${ax_saldo} o cliente ${ipt_nome.value} está com saldo ACIMA DA MÉDIA`;
        } else {
            div_msg.innerHTML = `Com o saldo de ${ax_saldo} o cliente ${ipt_nome.value} TEM PERFIL DE INVESTIDOR`;
        }
    }