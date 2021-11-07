window.addEventListener("scroll", function(){
    var navmenu = document.querySelector(".nav-menu");
    navmenu.classList.toggle("sticky", this.window.scrollY > 0);
});

let dias = 20;
let horas = 0;
let minutos = 0;
let segundos = 0;
cargarSegundos()

// Defenir y Ejecutando  Segundos 
function cargarSegundos() {
    let txtSegundos;

    if (segundos < 0) {
        segundos = 59;
    }
    // Mostando Segundos en Pantallas
    if (segundos < 10) {
        txtSegundos = '0${segundos}';
    } else {
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;
    cargarMinutos(segundos);
}

// Definimos y Ejecutamos los minutos
function cargarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos !== 0){
        setTimeout(() => {
            minutos--;
        },500)
    }else if(segundos == -1 && minutos == 0){
        setTimeout(() => {
            minutos = 59;
        },500)
    }

    // mostar Minutos en pantalla
    if(minutos < 10){
        txtMinutos = '0${minutos}';
    }else{
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;

    cargarHoras(segundos,minutos);
}

// Definimos y Ejecutamos los horas
function cargarHoras(segundos,minutos){
    let txtHoras;

    if(segundos == -1 && minutos == 0 && horas !== 0){
        setTimeout(() => {
            horas--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0){
        setTimeout(() => {
            horas = 24;
        },500)
    }

    // Mostar horas en pantalla
    if(horas < 10){
        txtHoras = '0${horas}';
    }else{
        txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
    cargarDias(segundos,minutos,horas);
}

// Definimos y Ejecutamos los dias
function cargarDias(segundos,minutos,horas){
    let txtdias;

    if(segundos == -1 && minutos == 0 && horas == 0 && dias !== 0){
        setTimeout(() => {
            dias--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0 && dias == 0){
        setTimeout(() => {
            dias = 2;
        },500)
    }

    // Mostar dias en pantalla
    if(dias < 10){
        txtdias = '0${dias}';
    }else{
        txtdias = dias;
    }
    document.getElementById('dias').innerHTML = txtdias;
}

// Ejecutamos casa Segundo
setInterval(cargarSegundos, 1000);