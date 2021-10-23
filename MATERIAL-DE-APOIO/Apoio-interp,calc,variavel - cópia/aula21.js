
   
    function incluir() {
        
        // aqui usamos a INTERPOLAÇÃO!
        // iniciamos e finalizamos o texto com CRASE! Usamos ${} para colocar a parte dinamica, 
        // ou seja EXPRESSÕES (ex: valor de um campo)
        div_mens.innerHTML += `O primeiro é: ${primeiro.value} o segundo é: <b> ${ultimo.value} </b>`;
        primeiro.value = '';
        ultimo.value = '';
    }

