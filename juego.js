let cara = 0;
let sello = 0;
const ing= document.getElementById('ingresar');
let cont;
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
    apuesta=0;
    
    updateStats();
});

ing.addEventListener('click', ()=>{
    let opcion = document.getElementById('opcion').value;
    opcion = parseInt(opcion);
    let apuesta = document.getElementById('apuest').value;
    apuesta = parseInt(apuesta);

    let c = 0;
    let confirmar = true;
    if ( apuesta >= 1000 ) {
        do {
            switch (opcion) {
                
                case 1:
                    swal(`Tu valor apostado es: ${apuesta}`);
                    
                    break;
                case 2:
                    swal(`Tu valor apostado es: ${apuesta}`)
                    break;
            
                default:
                    break;
            }
             confirmar = window.confirm(`Desea seguir jugando?`)
        
        } while (confirmar == true){
            swal(`Gracias por jugar`)
        };
    
    
    } else {
        swal (`Por favor un valor mayor a 1000 `)
    }
    
    });
 