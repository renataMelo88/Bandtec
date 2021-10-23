
    function orcamento() {
        var ax_qtde_natural = Number(ipt_qtde_natural.value);
        var ax_val_natural = Number(ipt_val_natural.value);
        var ax_val_comgas = Number(ipt_val_comgas.value);
        var ax_qtde_comgas = Number(ipt_qtde_comgas.value);

        b_tot_unid.innerHTML = ax_qtde_natural + ax_qtde_comgas;

        b_qtde_natural.innerHTML = ax_qtde_natural;
        b_val_natural.innerHTML = (ax_val_natural * ax_qtde_natural).toFixed(2);

        b_qtde_comgas.innerHTML = ax_qtde_comgas;
        b_val_comgas.innerHTML = (ax_val_comgas * ax_qtde_comgas).toFixed(2);

        b_valor_total.innerHTML = (ax_val_natural * ax_qtde_natural +
            ax_val_comgas * ax_qtde_comgas).toFixed(2);

        ax_propor_val_natural = ax_val_natural * ax_qtde_natural /
            (ax_val_natural * ax_qtde_natural + ax_val_comgas * ax_qtde_comgas) * 100;
        ax_propor_val_comgas = ax_val_comgas * ax_qtde_comgas /
            (ax_val_natural * ax_qtde_natural + ax_val_comgas * ax_qtde_comgas) * 100;

        b_propor_val_natural.innerHTML = ax_propor_val_natural.toFixed(1);
        b_propor_val_comgas.innerHTML = ax_propor_val_comgas.toFixed(1);

        b_propor_qtde_natural.innerHTML = (ax_qtde_natural / (ax_qtde_natural + ax_qtde_comgas) * 100).toFixed(1);
        b_propor_qtde_comgas.innerHTML = (ax_qtde_comgas / (ax_qtde_natural + ax_qtde_comgas) * 100).toFixed(1);

        div_barra_natural.style.width = ax_propor_val_natural + '%';
        div_barra_comgas.style.width = ax_propor_val_comgas + '%';

        div_dados_entrada.innerHTML = '';
        div_resultado.style.display = 'block';
    }
