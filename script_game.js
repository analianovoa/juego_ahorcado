const animales = ["LEOPARDO","HIPOPOTAMO","AVESTRUZ","ELEFANTE","JIRAFA","SERPIENTE","COCODRILO"];

const lienzo = document.getElementById("ahorcado");		
const contexto = lienzo.getContext("2d");

let animalSecreto = "";
let letras = [];
let errores = 6;

function elejirAnimalSecreto(){
        let animal = animales[Math.floor(Math.random() * animales.length)];
        animalSecreto = animal;
        console.log(animalSecreto);
        return animal;
}

//uso del codigo ASCII para verificar letras ingresadas con el teclado
function comprobarLetra(key){
        let estado = false
        if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
          letras.push(key)  
          console.log(key)
          return estado;
        } else {
          estado = true
          console.log(key)
          return true;
        }
}


function anadirLetraErronea(letter) {
    if (animalSecreto.indexOf(letter) <= 0)
    errores -= 1
    console.log(errores)
}

function iniciarJuego(){
    document.getElementById("btn-iniciar").style.display = "none";
    document.getElementById("btn-nuevoJuego").style.display = "block";
    document.getElementById("btn-salir").style.display = "block";
    elejirAnimalSecreto();
    dibujarAhorcado();
    //cantidadErrores();
    dibujarGuiones()

//comprobar validacion de entrada de teclado, evento manipulacion de dom onkeydown
    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
           if ( comprobarLetra(letra) && animalSecreto.includes(letra)) {
              for (let i = 0; i < animalSecreto.length; i++) {
                if (animalSecreto[i] === letra) {
                  mostrarLetraAcertada(i)
                }
              }
            }
            else {
                anadirLetraErronea(letra)
                mostrarLetraErronea(letra, errores)
            }

          }
          
}

