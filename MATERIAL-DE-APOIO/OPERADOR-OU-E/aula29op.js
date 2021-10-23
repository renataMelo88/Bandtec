
  function verificar() {
    var ax_media = ipt_media.value;
    var ax_frequencia = ipt_frequencia.value;

/* 
  O teste abaixo - "media && frequencia" só será Verdadeiro quando as duas condições forem Verdadeiras ao mesmo tempo...
  Basta uma condição ser falsa para a resposta ser falsa
  Na primeira condição falsa, o teste com operador “e” é encerrado dando resposta falsa
*/
    if (ax_media >= 6 && ax_frequencia>=75) {
      alert ("APROVADO!!!");
    } else {
      alert ("reprovado, tente novamente");
    }
  }

