function testar() {  
    msg.innerHTML = '';
    var quantidade = 0;
    var ax_sorteado = 0;
    var numero = Number(ipt_numero.value);

    while (quantidade < 20) {
        ax_sorteado = (Math.random() * 100).toFixed(0);
        msg.innerHTML += `Muito bem você é uma pessoa de sorte <br>`;



        if (ax_sorteado % 6 == 0) {
            break;


        }
        quantidade++;

    }



}