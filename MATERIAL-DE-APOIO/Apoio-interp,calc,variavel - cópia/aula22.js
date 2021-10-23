function multiplicar() {
    // Observe que o cálculo PODE ser feito dentro da expressão na interpolação
    div_msg.innerHTML += `<br>O resultado da multiplicação é: <b> 
        ${pri_num.value * seg_num.value} </b>`;
}
function dividir() {
    div_msg.innerHTML += `<br>O resultado da divisão é: <b> 
        ${pri_num.value / seg_num.value} </b>`;
}
function exponenciar() {
    div_msg.innerHTML += `<br>O resultado da exponenciação é: <b> 
        ${pri_num.value ** seg_num.value} </b>`;
}
function raiz() {
    div_msg.innerHTML += `<br>O resultado da radiciação é: <b> 
        ${pri_num.value ** (1/seg_num.value)} </b>`;
}
function subtrair() {
    div_msg.innerHTML += `<br>O resultado da subtração é: <b> 
        ${pri_num.value - seg_num.value} </b>`;
}

/*
Para SOMAR, temos que, OBRIGATORIAMENTE, converter CADA UM dos campos em número
se não fizermos isso, os valores serão concatenados e não somados
    
É POSSÍVEL invocar funções (como a Number) dentro de expressões na interpolação
*/ 
function somar() {
    div_msg.innerHTML += `<br>O resultado da soma é: <b> 
        ${Number(pri_num.value) + Number(seg_num.value)} </b>`;
}

