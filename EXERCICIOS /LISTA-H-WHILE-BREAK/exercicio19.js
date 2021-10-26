var onibus, trem, metro;

function verificar() {

        onibus = Number(ipt_onibus.value);
        trem = Number(ipt_trem.value);
        metro = Number(ipt_metro.value);

        var inicial = 1
        fraseOne.style.color = 'red';
        
        while( inicial < onibus + 1)
            
            if (inicial == 1) {
                
                fraseOne.innerHTML += `Pegando o ${inicial}º ônibus<br>`;
            } else if (inicial == 2) {
                
                fraseOne.innerHTML += `Pegando o ${inicial}º ônibus, começando a cansar... <br>`;
            } else {
                fraseOne.innerHTML += `Pegando o ${inicial}º ônibus. Já cansado! <br>`;
            }

            inicial++;
            
        }



        inicial = 1
        fraseTwo.style.color = 'green';


        while (inicial < trem + 1) {


            if (inicial == 1) {
                fraseTwo.innerHTML += `Pegando o ${inicial}º trem<br>`;
            } else if (inicial == 2) {
                fraseTwo.innerHTML += `Pegando o ${inicial}º trem, começando a cansar... <br>`;
            } else {
                fraseTwo.innerHTML += `Pegando o ${inicial}º trem. Já cansado! <br>`;
            }

            inicial++;
            
        }

        inicial = 1
        fraseThree.style.color = 'blue';


        while (inicial < metro + 1) {


            if (inicial == 1) {
                fraseThree.innerHTML += `Pegando o ${inicial}º metro<br>`;
            } else if (inicial == 2) {
                fraseThree.innerHTML += `Pegando o ${inicial}º metro, começando a cansar... <br>`;
            } else {
                fraseThree.innerHTML += `Pegando o ${inicial}º metro. Já cansado! <br>`;
            }

            inicial ++;
            
        }


        var onibus,trem,metro;

        function verificar(){
    
            onibus = Number(ipt_onibus.value);
            trem = Number(ipt_trem.value);
            metro = Number(ipt_metro.value);
    
            var inicial = 1
            fraseOne.style.color = 'red';

            while(inicial < onibus+1){
    
                
                
                if(inicial == 1){
                    
                    fraseOne.innerHTML += `Pegando o ${inicial}º ônibus<br>`;
                }else if(inicial == 2) {
                    
                    fraseOne.innerHTML += `Pegando o ${inicial}º ônibus, começando a cansar... <br>`;
                } else {
                    fraseOne.innerHTML += `Pegando o ${inicial}º ônibus. Já cansado! <br>`;
                }
                
                inicial++;
                
            }
            
                
    
            inicial = 1
            fraseTwo.style.color = 'green';
            while(inicial < trem+1){
    
                
                if(inicial == 1){
                    fraseTwo.innerHTML += `Pegando o ${inicial}º trem<br>`;
                }else if(inicial == 2) {
                    fraseTwo.innerHTML += `Pegando o ${inicial}º trem, começando a cansar... <br>`;
                } else {
                    fraseTwo.innerHTML += `Pegando o ${inicial}º trem. Já cansado! <br>`;
                }
    
                inicial++;
                
            }
    
            inicial = 1
            fraseThree.style.color = 'blue';

            while(inicial < metro+1){
    
                
                if(inicial == 1){
                    fraseThree.innerHTML += `Pegando o ${inicial}º metro<br>`;
                }else if(inicial == 2) {
                    fraseThree.innerHTML += `Pegando o ${inicial}º metro, começando a cansar... <br>`;
                } else {
                    fraseThree.innerHTML += `Pegando o ${inicial}º metro. Já cansado! <br>`;
                }
    
                inicial++;
                
    
            
    
        }
        }