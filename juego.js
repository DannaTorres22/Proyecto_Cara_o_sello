let cara = 0;
let sello = 0;
const ingresar= document.getElementById('ingresar');
let cont=0;
cont=cont+1;
let total;
let apuesta=0;
total=total+apuesta;
let moneda = document.querySelector(".moneda");
let girarBtn = document.querySelector("#flip-button");
let reinicioBtn = document.querySelector("#reinicio-button");




girarBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    moneda.style.animation = "none";
    if(i){
        setTimeout(function(){
            moneda.style.animation = "spin-cara 3s forwards";
        }, 100);
        cara++;

    }
    else{
        setTimeout(function(){
            moneda.style.animation = "spin-sello 3s forwards";
        }, 100);
        sello++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});


function updateStats(){
    document.querySelector("#cara-count").textContent = `cara: ${cara}`;
    document.querySelector("#sello-count").textContent = `sello: ${sello}`;
    document.querySelector("#cant-count").textContent = `jugadas: ${cont}`;
    document.querySelector("#dinero-count").textContent = `dinero: ${total}`;
   
}

function disableButton(){
   girarBtn.disabled = true;
    setTimeout(function(){
       girarBtn.disabled = false;
    },3000);
}

//reiniciar la partida 
reinicioBtn.addEventListener("click",() => {
    moneda.style.animation = "none";
    cara = 0;
    sello = 0;
    cont=0;
    total=0;
    
    updateStats();
});

girarBtn.addEventListener('click', ()=>{
    let opcion = document.getElementById('opcion').value;
    opcion = parseInt(opcion);
    apuesta = document.getElementById('apuest').value;
    apuesta = parseInt(apuesta);

    let confir = true;
    if ( apuesta >= 100 ) {
        do {
            switch (opcion) {
                
                case 1:
                    swal(`Tu valor apostado es:`);
                    
                    break;
                case 2:
                    swal(`Tu valor apostado es:`);
                    break;
            
                default:
                    break;
            }
            confir = window.confirm(`Desea seguir jugando?`);
        
        } while (confir == true){
            swal(`Gracias por jugar`);
            
        };
    
    } else {
        swal (`Por favor un valor mayor a 1000 `);
    }
    
    });
 