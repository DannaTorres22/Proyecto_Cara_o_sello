let cara = 0;
let sello = 0;
const nombre= document.getElementById('ingr');
let dinero;
let cont;
let moneda = document.querySelector(".moneda");
let girarBtn = document.querySelector("#flip-button");
let reinicioBtn = document.querySelector("#reinicio-button");


Swal.fire(`Bienvenid@" ${nombre}"`);

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
    document.querySelector("#cont-count").textContent = `contador: ${cont}`;
}

function disableButton(){
   girarBtn.disabled = true;
    setTimeout(function(){
       girarBtn.disabled = false;
    },3000);
}

reinicioBtn.addEventListener("click",() => {
    moneda.style.animation = "none";
    cara = 0;
    sello = 0;
    
    updateStats();
});
 