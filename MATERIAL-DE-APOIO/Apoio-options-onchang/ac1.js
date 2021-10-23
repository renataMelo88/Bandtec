
    function fazer_orcamento() {
        var valor_mineral = Number(input_valor_mineral.value);
        var qtd_mineral = Number(input_qtd_mineral.value);

        var valor_comgas = Number(input_valor_comgas.value);
        var qtd_comgas =  Number(input_qtd_comgas.value);

        var valor_total_mineral = valor_mineral * qtd_mineral;
        var valor_total_comgas = valor_comgas * qtd_comgas;

        var valor_total = valor_total_mineral + valor_total_comgas;
        var qtd_total = qtd_mineral + qtd_comgas;

        var percentual_valor_mineral = (valor_total_mineral/valor_total) * 100;
        var percentual_valor_comgas = (valor_total_comgas/valor_total) * 100;

        var percentual_qtd_mineral = (qtd_mineral/qtd_total) * 100;
        var percentual_qtd_comgas = (qtd_comgas/qtd_total) * 100;

        b_qtd_total.innerHTML = qtd_total;
        b_valor_total.innerHTML = `R$${valor_total.toFixed(2)}`;

        b_qtd_total_mineral.innerHTML = qtd_mineral;
        b_qtd_total_comgas.innerHTML = qtd_comgas;

        b_valor_total_mineral.innerHTML = `R$${valor_total_mineral.toFixed(2)}`;
        b_valor_total_comgas.innerHTML = `R$${valor_total_comgas.toFixed(2)}`;

        b_percentual_valor_mineral.innerHTML = `${percentual_valor_mineral.toFixed(2)}%`;
        b_percentual_valor_comgas.innerHTML = `${percentual_valor_comgas.toFixed(2)}%`;

        b_percentual_qtd_mineral.innerHTML = `${percentual_qtd_mineral.toFixed(2)}%`;
        b_percentual_qtd_comgas.innerHTML = `${percentual_qtd_comgas.toFixed(2)}%`;

        div_barra_mineral.style.width = `${percentual_valor_mineral}%`;
        div_barra_comgas.style.width = `${percentual_valor_comgas}%`;

        div_formulario_entrada.style.display = "none";
        div_orcamentario.style.display = "block";

    }

