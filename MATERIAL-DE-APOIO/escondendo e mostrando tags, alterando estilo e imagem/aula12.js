

    //  Se uma tag HTML tem um id, então podemos trabalhar essa tag no JavaScript

    /*  O innerHTML ALTERA o conteúdo do corpo da tag especificada
        É possível passar outras tags (normalmente as de edição <br>, <b>, <i>, ...) */
    
    function corinthians() {
        div_msg.innerHTML = 'Vai Corinthians!';
    //  Neste caso estamos TOCANDO o conteúdo do corpo da tab div_msg por Vai Corinthians!
    }

    function palmeiras() {
        div_msg.innerHTML = "Verdão elétrico! <br>    O Parmeira não tem mundial!!!";
    }

    function santos() {
        div_msg.innerHTML = 'Dá-lhe <b>peixe</b>!';
    }

    function sao_paulo() {
        div_msg.innerHTML = 'Salve o <i>tricolor</i> paulista!';
    }
