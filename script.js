let menuVisible = false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function selecionar(){
    // ocultar el menu una vez que se selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    let habilidades = document.querySelectorAll(".progreso");
    let distancia_skills = window.innerHeight - document.getElementById("skills").getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        const clasesHabilidades = ["javascript", "htmlycss", "git", "playwright", "drupal", "comunicacion", "equipo", "creati", "respo", "tecnica"];
        habilidades.forEach((habilidad, index) => {
            habilidad.classList.add(clasesHabilidades[index]);
        });
    }
}


window.addEventListener('scroll', efectoHabilidades);


let botonDescargar = document.getElementById('descargarCV');

botonDescargar.addEventListener('click', function() {
    let enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = 'CV/Jhorman_Bolivar_Hoja_de_vida.pdf'; 
    enlaceDescarga.download = 'JhormanCV.pdf'; 

    // document.body.appendChild(enlaceDescarga);

    enlaceDescarga.click();

    document.body.removeChild(enlaceDescarga);
});

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let formData = new FormData(this);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xqkroaep");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById("mensaje-confirmacion").style.display = "block";
                document.getElementById("formulario").reset();
                setTimeout(function() {
                    window.location.reload();
                }, 3000);
            } else {
                alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
            }
        }
    };
    xhr.send(formData);
});

// function playMusic() {
//     let audio = document.getElementById('background-music');
//     audio.play();
// }

// function pauseMusic() {
//     let audio = document.getElementById('background-music');
//     audio.pause();
// }

// function setStartTime() {
//     let audio = document.getElementById('background-music');
//     let startTime = document.getElementById('start-time').value;
//     audio.currentTime = startTime;
//     audio.play();
// }

// document.addEventListener('DOMContentLoaded', function() {
//     let audio = document.getElementById('background-music');
//     audio.currentTime = 48;  
//     audio.play();  
// });