

    function resto() {

        //  O ALERT abaixo mostrará o resto da divisão entre os dois números entrados

        var ax_num1 = Number(ipt_num1.value);
        var ax_num2 = Number(ipt_num2.value);
        alert(ax_num1 % ax_num2);
    }




    function par() {

        var ax_num1 = Number(ipt_num1.value);

        //  usando a operação de resto da divisão em uma condição (IF)
        if ((ax_num1 % 2) == 0) {
            alert("o primeiro número é par")
        } else {
            alert("o primeiro número é impar");
        }
        var ax_par = ((ax_num1 % 2) == 0);
        // //  o resto da divisão está sendo atribuído a uma variável
        // var ax_resto = ax_num1 % 2;
        // if (ax_resto == 0) {
        //     alert("USANDO A VARIÁVEL - o primeiro número é par")
        // } else {
        //     alert("USANDO A VARIÁVEL - o primeiro número é impar");
        // }
    }
    
