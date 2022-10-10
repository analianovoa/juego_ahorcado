const animales = ["LEOPARDO","HIPOPOTAMO","AVESTRUZ","ELEFANTE","JIRAFA","SERPIENTE","COCODRILO"];

const lienzo = document.getElementById("ahorcado");		
const contexto = lienzo.getContext("2d");

let animalSecreto ="";

function elejirAnimalSecreto(){
        let animal = animales[Math.floor(Math.random() * animales.length)];
        animalSecreto = animal;
        console.log(animalSecreto);
        return animal;
}

function iniciarJuego(){
    document.getElementById("btn-iniciar").style.display = "none";
    document.getElementById("btn-nuevoJuego").style.display = "block";
    document.getElementById("btn-salir").style.display = "block";
    elejirAnimalSecreto();
    dibujarAhorcado();
    cantidadErrores();
    dibujarGuiones()
}
