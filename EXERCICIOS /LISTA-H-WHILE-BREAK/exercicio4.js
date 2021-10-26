


    function sortear() {

        div_msg.innerHTML = '';
        var quantidade = 0;
        var ax_sorteado = 0;
        var numero = Number(ipt_numero.value);


        


        while (quantidade < numero) {
            ax_sorteado = (Math.random() * 100).toFixed(0);
            div_msg.innerHTML += `${ax_sorteado} <br>`;

            

            if (ax_sorteado %6 == 0) {
                break;
              
                
            }
                quantidade++;

        }

    }


