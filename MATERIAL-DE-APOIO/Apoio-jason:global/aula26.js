
    /* 
    A variável criada fora de uma função é chamada de VARIÁVEL GLOBAL.

    Ela é criada imediatamente quando a página é carregada e seu valor é COMPARTILHADO entre todas as funções
    
    NÃO devemor criar variáveis locais com o mesmo nome da variável Global
    */

    var ax_vezes = 0;



    function contar() {
       // Aqui estamos adicionando 1 na variável global "vezes" 
       
       ax_vezes ++;
    }

    function atualizar() {
        // Nesta outra função estamos exibindo o conteúdo da variável global
        
        b_vezes.innerHTML = ax_vezes;
    }



