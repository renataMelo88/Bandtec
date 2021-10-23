// variável fora de função
    // chamamos de VARIÁVEL GLOBAL
    // é criada imediatamente quando a página carrega
    // e seu valor é COMPARTILHADO entre todas as funções
    var vezes = 0;

    function conta() {
        // NÃO devemos criar variáveis locais com mesmo nome de GLOBAIS
        // Aqui estamos usando a variável "vezes" que foi 
        // criada como variável global 
        vezes++;
        b_qtde.innerHTML = vezes;
    }

    function soma100() {
        // Aqui estamos usando a novamente variável "vezes" que foi 
        // criada como variável global, ou seja, eu posso usar a 
        // variável global em qualquer função do meu programa.
        vezes += 100;
        b_qtde.innerHTML = vezes;
    }
    
    function tira10() {
        // Observe que novamente estou usando a variável "vezes"
        vezes = vezes - 10;
        //vezes-=10;  ==> forma simplificada de escrever o comando acima
        b_qtde.innerHTML = vezes;
    }