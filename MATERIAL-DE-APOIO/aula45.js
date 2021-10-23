
    function sortear() {
       
        var sorteado = 0;
        var index = 0;
        div_num.innerHTML = "<b>Números Sorteados</b> <br>"; 

        while (index < ipt_qtde.value) {
            sorteado = (Math.random()*100).toFixed(0);
            div_num.innerHTML += `${sorteado} <br>`;
            if (sorteado % 7 == 0) {
                break; // SE chegar nesta instrução, o loop MORRE imediatamente
            }
            index++;
        }

        
        // Loop infinito com for
        // for ( ; ; ) {
        //     // .... comandos
        // }


        // Loop infinito com while
        // while (true) {
        //     // .... comandos
        // }
    }
