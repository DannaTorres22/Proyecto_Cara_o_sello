let cara = 0;
let sello = 0;
let cont=0;
let total=0;
let totalapuesta=0
let moneda = document.querySelector(".moneda");
let girarBtn = document.querySelector("#flip-button");
let reinicioBtn = document.querySelector("#reinicio-button");
let apuestaInput = document.querySelector("#apuest");
let opcionInput = document.querySelector("#opcion");

//hacer girar la moneda
girarBtn.addEventListener("click", () => {
    //validacion de campos
    if(apuestaInput.value !='' && opcionInput.value!=''){

        let i = Math.floor(Math.random() * 2);
        cont++;

    moneda.style.animation = "none";
    //almacena la opcion del usuario
    let opcUsuario=parseInt(opcionInput.value)
    //almacena lo que gano por apuesta
    let apuestaUsu=parseInt(apuestaInput.value)
    //total del dinero que aporto
    totalapuesta+=apuestaUsu;

    if(i){
        moneda.style.animation = "spin-cara 2s forwards";
        setTimeout(function(){
            if(i===opcUsuario){
                total+=apuestaUsu*2;
                swal(`Felicidades, ganaste la moneda cayo en cara. ganaste ${apuestaUsu*2}. en total tienes: ${total}`);
                
            } else{
                total-=apuestaUsu;
                swal(`lo sentimos, has perdido la moneda cayo en cara. perdiste ${apuestaUsu} en total tienes: ${total}`);
              
            }
        }, 3000);
        cara++;

    }
    else{
        moneda.style.animation = "spin-sello 2s forwards";
        setTimeout(function(){
            if(i===opcUsuario){
                total+=apuestaUsu*2;
                swal(`Felicidades, ganaste la moneda cayo en sello. ganaste ${apuestaUsu*2}. en total tienes: ${total}`);
               
            } else{
                total-=apuestaUsu;
                swal(`lo sentimos, has perdido la moneda cayo en sello. perdiste ${apuestaUsu} en total tienes: ${total}`);
                
            }
        }, 3000);
        sello++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
    }else{
        swal('selecciona una opcion para jugar y un valor a apostar')
    }
    
});


   
        
    