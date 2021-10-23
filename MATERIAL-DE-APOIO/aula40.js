
    //               VARIÁVEIS BOOLEANAS 
    // As variáveis Booleanas só comportam true ou false
    // Elas são geradas com o resultado de uma condição 
    //      e sempre devolverão o true ou false da condição que as originou

    function analisar() {
    

        // Testando duas variáveis booleanas com operador "e"  &&
        var ax_mediaOK = ipt_media.value >= 6;
        var ax_freqOK = ipt_freq.value >= 75;

        if (ax_mediaOK && ax_freqOK) {
            alert("Aluno reprovado")
        } else {
            alert("Aluno aprovado")
        }


        // Testando duas variáveis booleanas com operador "ou"  
        // var ax_mediaRuim = ipt_media.value < 6;
        // var ax_freqRuim = ipt_freq.value < 75;
        //
        // if (ax_mediaRuim || ax_freqRuim) {
        //     alert ("Reprovado");
        // } else {
        //     alert ("Aprovado");
        // }



        // Testando uma variável booleana gerada a partir de outras duas variáveis booleanas
        // var ax_aprovado = ax_mediaOK && ax_freqOK; 
        //   
        // if (ax_aprovado == false) {
        //     alert ("Aluno reprovado")
        // } else {
        //     alert ("Aluno aprovado")
        // }

        
        // É possivel gerar uma variável booleana sem o teste condicional, 
        // sisplesmente atribuir true ou false para a variável
        // var ax_seila = true;

        // if (ax_seila) { alert("está com true") }
        // else { alert("está com false") }
    }

