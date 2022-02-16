//5. Dividir el código en módulos

import {Leon, Lobo, Oso, Serpiente, Aguila} from "./classes/races.js";

let animales = [];

const registroAnimal = document.getElementById("btnRegistrar");
registroAnimal.addEventListener("click", () => {
    let nombre = document.getElementById("animal");
    let edad = document.getElementById("edad");
    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage;
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);
    let comentarios = document.getElementById("comentarios");
    let sonido = document.getElementById("player");

    let nuevoAnimal;

    if(nombre.value == "Leon"){
        nuevoAnimal = new Leon(
            nombre.value,
            edad.value,
            imgSrc,
            comentarios.value,
            sonido
        );
    } else if(nombre.value == "Lobo"){
        nuevoAnimal = new Lobo(
            nombre.value,
            edad.value,
            imgSrc,
            comentarios.value,
            sonido
        );
    }else if(nombre.value == "Oso"){
        nuevoAnimal = new Oso(
            nombre.value,
            edad.value,
            imgSrc,
            comentarios.value,
            sonido
        );
    }else if(nombre.value == "Serpiente"){
        nuevoAnimal = new Serpiente(
            nombre.value,
            edad.value,
            imgSrc,
            comentarios.value,
            sonido
        );
    }else if(nombre.value == "Aguila"){
        nuevoAnimal = new Aguila(
            nombre.value,
            edad.value,
            imgSrc,
            comentarios.value,
            sonido
        );
    }

//7. Validar que el usuario haya asignado todos los datos del animal antes de que éste
//sea agregado a la tabla.
//8.Devolver el formulario en un estado inicial luego de registrar a cada animal.

    if(nombre.value && edad.value && imagenSrcBg && comentarios.value){
        animales.push(nuevoAnimal);
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        previewElement.style.backgroundImage = "none";
        comentarios.value = "";
        reloadTable();
        
    }else{
        alert("faltan campos por llenar o seleccionar");
    }
});

//6. Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados
//con el formulario.
const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales");
    animalesTemplate.innerHTML = "";
//10. Mostrar el detalle de cada animal en una ventana modal al ser presionada su imagen
    animales.forEach((an, i) => {
        animalesTemplate.innerHTML+= `
            <div class="px-2">
                <div style="width: 10rem">
                <a data-bs-toggle ="modal" data-bs-target="#modalImage${i}">
                <img class="contain w-100" type="button" src="${an.getImg}" alt="Card image cap"></img>
                </a>
                    <div class="p-1">
                        <img id="animalSound" href="${an.sonido}" src="./assets/imgs/audio.svg" style="width: 1.25rem">
                    </div>
                </div>
            </div>
            
            <div tabindex="-1" aria-labelledby="modalImage${i}" class="modal fade"
             id="modalImage${i}" >
                <div class="modal-dialog" style="width: 18rem"> 
                    <div class="modal-content bg-dark p-3">
                    <img class="contain w-100 pb-1" type="button" src="${an.getImg}" alt="Card image cap"></img>
                    <p class="text-light fw-bold">${an.getEdad}</p>
                    <p class="text-light fw-bold text-capitalize">comentarios</p>
                    <hr class="" style="color: black">
                    <p class="text-light">${an.getComentarios}</p>            
                    </div>
                </div>
            </div>
        `
    });    
}