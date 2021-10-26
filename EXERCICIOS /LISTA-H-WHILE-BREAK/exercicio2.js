
    function analisar() {
        var contador = 5;
        var numero = Number(ipt_numero.value);
        span_msg.innerHTML = '';

        while (contador <= numero) {
            span_msg.innerHTML += `${contador} <br>`;
            contador++;

        }

    }