  // Math.random() gera aleatoriamente um número >=0 e <1.
    // cada vez que o comando é executado um número >=0 e <1 é sorteado.

    // parseInt() retorna a parte inteira do número que está entre os parenteses ()
    // ele NÃO ARREDONDA o número, simplesmente descarta o valor após a virgula

    function aleatorio24() {

        // O Math.random() foi multiplicado por 3 pois 
        //    entre 2 e 4 existem 3 números (2,3,4), ou seja, 
        //    final - inicial + 1 ==> 4 -2 + 1 ==> 3

        // após o parseInt() foi somado 2 que é o inicial
        div_result.innerHTML += `${parseInt(Math.random()*3)+2} <br>`;
    }

    function aleatorio7_11() {

        // O Math.random() foi multiplicado por 5 pois 
        //    entre 7 e 11 existem 5 números (5,6,7,8,9,10,11), ou seja, 
        //    final - inicial + 1 ==> 11 - 7 + 1 ==> 5

        // após o parseInt() foi somado 7 que é o inicial
        div_result.innerHTML += `${parseInt(Math.random()*5)+7} <br>`;
    }