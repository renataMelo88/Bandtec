
function verificar() {

    div_msg.innerHTML = '';
    var numero = Number(ipt_numero.value);
    var inicial = 0;
   

    while (inicial < numero) {

        if( numero > 20 || numero <100)
        while(inicial < numero){
            if(inicial % 5 ==0){

                // console.log('inicial');
            div_msg.innerHTML += `${inicial} <br>`;


            }
            inicial++;

        }

            
           

        }
    }

