function analisar(){   

    var quantidade = Number(ipt_numero.value)
    var contador = 1;

    while(contador < quantidade){

        div_msg.innerHTML += `${ipt_nome.value} eu te amo! <br>`;
        contador++;

    }

}
