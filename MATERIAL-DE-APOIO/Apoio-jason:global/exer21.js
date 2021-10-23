
    // Variáveis globais para guardar a quantidade de pontos 
    // do time A e do time B
    var ax_timea = 0;
    var ax_timeb = 0;

    function placar() {
        // Soma nas variáveis globais a quantidade de pontos digitado na página
        // OBS o comando abaixo é o mesmo que 
        //       ax_timea = ax_timea + Number(ipt_timea.value);
        ax_timea += Number(ipt_timea.value);
        ax_timeb += Number(ipt_timeb.value);

        //Mostra na página o placar contido nas variáveis globais
        b_timea.innerHTML = ax_timea;
        b_timeb.innerHTML = ax_timeb;

        //Limpa os campos de entrada da página
        ipt_timea.value = "";
        ipt_timeb.value = "";
        
    }
    function zerar() {
        // Inicializa as variáveis globais
        ax_timea = 0;
        ax_timeb = 0;

        // Zera o placar da página
        b_timea.innerHTML = 0;
        b_timeb.innerHTML = 0;
    }
