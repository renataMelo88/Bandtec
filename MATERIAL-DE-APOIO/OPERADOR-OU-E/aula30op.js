
    function picole() {
        var sabor = Number(sel_sabor.value);
/*
|| -> Operador "OU". Nele, basta que 1 dos testes seja true (verdadeiro) que todo o teste dá true (verdadeiro)
*/
        if (sabor == 2 || sabor == 4) {
            alert("Oba, vou tomar o picolé!");
        } else {
            alert("Deu ruim,não gosto desse sabor :(");
        }
    }
