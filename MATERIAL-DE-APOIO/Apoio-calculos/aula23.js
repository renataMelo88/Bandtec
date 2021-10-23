
    function multiplicar() {
        // aqui eu criei a variável ax_num1 que recebeu o conteudo do campo de tela primeiro_num 
        // depois criei a variável ax_num2 que recebeu o conteudo do campo de tela segundo_num 
        // essas variáveis podem ser usadas várias vezes dentro da função que elas foram criadas
        var ax_num1 = primeiro_num.value;
        var ax_num2 = segundo_num.value;
        div_msg.innerHTML += `<br>O resultado da multiplicação é: <b> 
            ${ax_num1 * ax_num2} </b>`;
    }
    function dividir() {
        // neste caso eu criei a variável ax_divisao que recebeu o resultado de uma operação
        var ax_divisao = primeiro_num.value / segundo_num.value;
        div_msg.innerHTML += `<br>O resultado da ax_divisaoão é: <b> 
            ${ax_divisao} </b>`;
    }
    function exponenciar() {
        div_msg.innerHTML += `<br>O resultado da exponenciação é: <b> 
            ${primeiro_num.value ** segundo_num.value} </b>`;
    }
    function raiz() {
        div_msg.innerHTML += `<br>O resultado da radiciação é: <b> 
            ${primeiro_num.value ** (1/segundo_num.value)} </b>`;
    }
    function subtrair() {
        div_msg.innerHTML += `<br>O resultado da subtração é: <b> 
            ${primeiro_num.value - segundo_num.value} </b>`;
    }
    function somar() {
        // Para variável ax_num1 é atirbuido o valor numérico do primeiro campo de entrada
        var ax_num1 = Number(primeiro_num.value);
        var ax_num2 = Number(segundo_num.value);
        div_msg.innerHTML += `<br>O resultado da soma é: <b> 
            ${ax_num1 + ax_num2} </b>`;
    }

