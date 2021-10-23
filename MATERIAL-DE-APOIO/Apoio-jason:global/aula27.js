
    function comparar() {
        // Vamos criar dois JSONs - time1 é o primeiro OBJETO JSON  -  time2 é o segundo OBJETO JSON
         
        var time1 = {
            vitorias: Number(in_vitorias_t1.value),
            empates: Number(in_empates_t1.value),
            derrotas: Number(in_derrotas_t1.value)
        };
  
        var time2 = {
            vitorias: Number(in_vitorias_t2.value),
            empates: Number(in_empates_t2.value),
            derrotas: Number(in_derrotas_t2.value)
        };

        resultado.innerHTML = `<br><br>
            <b>Campanha do time 1: </b> <br>
            Vitórias: ${time1.vitorias} / Empates: ${time1.empates} / Derrotas: ${time1.derrotas} 
            <br><br>
            <b>Campanha do time 2: </b> <br>
            Vitórias: ${time2.vitorias} / Empates: ${time2.empates} / Derrotas: ${time2.derrotas}`;


        // É possível incluir mais dados em um JSON após a sua criação 
        // No exemplo abaixo vamos incluir o dado 'total_pontos' no JSON do time1 e no JSON do time2
        // 3 pontos para cada vitória e 1 ponto para cada empate
        
        time1.total_pontos = time1.vitorias*3 + time1.empates;
        time2.total_pontos = time2.vitorias*3 + time2.empates 
        
        resultado.innerHTML += ` <br><br> <b>Informação nova em cada JSON</b> <br>
            Total de pontos do time 1: ${time1.total_pontos}
            <br>
            Total de pontos do time 2: ${time2.total_pontos}`;


        // É possível alterar dados de um JSON (mesmo que ele seja uma const, como é para o time1)
        // No exemplo abaixo vamos alterar as vitorias do time1 para 12 e do time2 para 1

        time1.vitorias = 12;        
        time2.vitorias = 1;

        resultado.innerHTML += ` <br><br> <b>Alteração das vitórias de cada JSON</b> <br>
            Vitórias do time 1: ${time1.vitorias}
            <br>
            Vitórias do time 2: ${time2.vitorias}`;
    }

