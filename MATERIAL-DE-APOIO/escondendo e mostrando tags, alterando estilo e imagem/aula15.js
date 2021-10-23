

    /*  Para alterar a propriedade do atributo de uma tag no JS deve-se passar
        o id da tag, seguido de um ponto, qual o atributo, seguido de um ponto, 
        qual a propriedade, sinal de igual e o valor desejado entre aspas
        por exemplo:
        span_segredo.style.display = 'block';
            |          |        |       |
        id da tag      |        |       |   
                     atributo   |       |
                           propriedade  |
                                      valor 

    */
    function mostrar_segredo() {
        span_segredo.style.display = "block";
        but_mostrar.style.display = 'none';
        but_esconder.style.display = 'block';
    }

    function esconder_segredo() {      
        span_segredo.style.display = "none";
        but_mostrar.style.display = 'block';
        but_esconder.style.display = 'none';
    }

