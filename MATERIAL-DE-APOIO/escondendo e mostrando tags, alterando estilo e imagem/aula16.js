

/*  Para alterar o atributo de uma tag no JS deve-se passar: o id da tag,
    seguido de um ponto, qual o atributo,sinal de igual e o valor desejado entre aspas
    Exemplo da alteração do atributo src de uma imagem:
        img_clima.src = "dia-nublado.jpg";
            |      |            |
        id da tag  |            |   
                atributo        |
                              valor 

    */
    
function nublado() {
    img_clima.src = "dia-nublado.jpg";
    div_clima.style.backgroundColor = 'grey';
}

function chuvoso() {
    img_clima.src = "dia-chuvoso.jpg";
    div_clima.style.backgroundColor = 'blue';
}
