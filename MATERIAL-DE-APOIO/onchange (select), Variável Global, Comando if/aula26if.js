
    function validar() {
        var pontos = qtde_pontos.value;
        var multa = 0;

        // O comando if executa uma comparação, um teste, uma decisão....
        //
        // Sua estrutura é:
        // If (comparação) {comando(s)};
        //      Os comandos entre as {} SOMENTE serão executados 
        //      quando a condição  for verdadeira
        //
        //    Tipos de comparações:
        //    >	    Maior que
        //    <	    Menor que
        //    >=	Maior ou Igual
        //    <= 	Menor ou Igual
        //    ==	Igual
        //    !=	Diferente

        if (pontos >= 20) {
            resposta.innerHTML = `Carteira suspensa pois possui ${pontos} pontos<br>`;
            multa = pontos * 78;
            resposta.innerHTML += `O valor total das multas é de R$${multa.toFixed(2)}`;
        }

        if (pontos < 20) {
            multa = pontos * 78;
            resposta.innerHTML = `O valor total das multas é de R$${multa.toFixed(2)}`;
        }
    }

