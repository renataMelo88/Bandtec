
    function estudar() {
        var ax_media = ipt_gols.value / ipt_partidas.value;
        if (ax_media > 0.6) {
            div_msg.innerHTML = `Atacante de futuro`;
        } else if (ax_media < 0.2) {
            div_msg.innerHTML = `Mudar de posição`;
        } else {
            div_msg.innerHTML = `Atacante Mediano`;
        }
        
        div_msg.innerHTML += `<br><br>Sua média de gols/partida é de ${ax_media.toFixed(2)}`;
    }
