


function analisar(){

    var inicial = 0;
    
    while(inicial < 100){

        if(inicial % 3 == 0 && inicial % 5 ==0){
            mensagem.innerHTML += `É TRI! É PENTA!<br>`;
        }
        else if(inicial % 3 == 0){
            mensagem.innerHTML += `É TRI!<br>`;
        } else if(inicial % 5 == 0){
            mensagem.innerHTML += `É PENTA!<br>`;
        } else {
            mensagem.innerHTML += `${inicial}<br>`
        }

        inicial++;
    }

}