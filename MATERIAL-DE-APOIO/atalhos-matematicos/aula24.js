
    function aumentar1() {
        // neste caso estamos somando 1 no conteúdo do campo ax_resultado, mas poderia ser qualquer outro valor
        var ax_resultado = Number(numero.value);
        ax_resultado +=1;
        alert (ax_resultado);
    }
    function reduzir1() {
        // neste caso estamos subtraindo 1 no conteúdo do campo ax_resultado, mas poderia ser qualquer outro valor
        var ax_resultado = Number(numero.value);
        ax_resultado -=1;
        alert (ax_resultado);      
    }
    function aumentar1simples() {
        // neste caso estamos somando 1 no conteúdo do campo ax_resultado
        var ax_resultado = Number(numero.value);
        ax_resultado++;
        alert (ax_resultado);
    }
    function reduzir1simples() {
        // neste caso estamos subtraindo 1 no conteúdo do campo ax_resultado
        var ax_resultado = Number(numero.value);
        ax_resultado--;
        alert (ax_resultado);
    }
    function multiplicar() {
        // neste caso estamos alterando o conteúdo do ax_resultado para o triplo do seu valor
        var ax_resultado = Number(numero.value);
        ax_resultado *= 3;
        alert (ax_resultado);
    }
    function dividir() {
        // neste caso estamos alterando o conteúdo do ax_resultado para um terço do seu valor
        var ax_resultado = Number(numero.value);
        ax_resultado /= 3;
        alert (ax_resultado);
    }
