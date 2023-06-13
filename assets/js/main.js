function bordeImagen() {
    let imagen1 = document.querySelector("#imagen1")


    if (imagen1.style.border == "") {
        imagen1.style.border = "solid 2px red"
    }
    else {
        imagen1.style.border = ""
    }
}

function sumaStickers() {

    //Variables de cantidades
    let cant1 = document.querySelector("#cant1")
    let cant2 = document.querySelector("#cant2")
    let cant3 = document.querySelector("#cant3")
    //Variable de parrafo resumen
    let pTotal = document.querySelector("#total")

    let suma = Number(cant1.value) + Number(cant2.value) + Number(cant3.value)

    if (suma === 0) {
        pTotal.innerHTML = "Aún no escojes ningún stickers"
    }
    else if (suma <= 10) {
        pTotal.innerHTML = "Llevas " + suma + " Stickers"
    }
    else {
        pTotal.innerHTML = "Llevas demasiados Stickers"
    }

}

function verificarPass() {
    let digito1 = document.querySelector("#digito1")
    let digito2 = document.querySelector("#digito2")
    let digito3 = document.querySelector("#digito3")
    let mensajePass=document.querySelector("#mensajePassword")
    let passIngresada = digito1.value + digito2.value + digito3.value

    const PASS1="911"
    const PASS2="714"

    if(passIngresada===PASS1){
        mensajePass.innerHTML="Password 1 Correcta"
        mensajePass.style.color="green"
    }
    else if (passIngresada===PASS2){
        mensajePass.innerHTML="Password 2 Correcta"
        mensajePass.style.color="green"
    }
    else{
        mensajePass.innerHTML="Password Incorrecta"
        mensajePass.style.color="red"
    }
}