
    function calcular() {
        var ax_multa = 0;

        // Em um comando IF-ELSE sempre ocorre que:
        //     OU o bloco IF é executado
        //     OU o bloco ELSE é executado
        // JAMAIS,  em hipótese alguma, ambos serão executados,
        // SEMPRE um dos dois é executado.    
        if (ipt_pontos.value >= 20) {
            alert ("Carteira suspensa");
            ax_multa = ipt_pontos.value * 87;
        } else {
            ax_multa = ipt_pontos.value * 78;
        }

        // SEMPRE será executado o comando que está após o fechamento 
        // de todas as chaves "}" de um IF-ELSE 
        div_msg.innerHTML = `Valor total das multas é R$ ${ax_multa}`; 
    }
