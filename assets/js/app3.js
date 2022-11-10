let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let verificar = document.querySelector("#verificar");
let mensaje = document.querySelector("#mensaje");

verificar.addEventListener ("click", ()=>{

    let digito1 = Number(n1.value);
    let digito2 = Number(n2.value);
    let digito3 = Number(n3.value);

    if (digito1 === 9 && digito2 === 1 && digito3 === 1){
        mensaje.textContent = "Password 1 correcto";
    } else if (digito1 === 7 && digito2 === 1 && digito3 === 4) {
        mensaje.textContent = "Password 2 correcto";    
    } else {
        mensaje.textContent = "Password incorrecto"; 
    }
})