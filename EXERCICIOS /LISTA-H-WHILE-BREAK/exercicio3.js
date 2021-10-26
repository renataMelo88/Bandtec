

    function verificar() {


        span_msg.innerHTML = '';
        var numero1 = Number(ipt_numero.value);
        var numero2 = Number (ipt_numero2.value);


        while (numero1 <= numero2) {

            if (numero1 % 2 == 0) {

            span_msg.innerHTML += `${numero1} <br>`;
            numero1++;

                
            }
            else{
            numero1++;    

            }

            



        }


    }


