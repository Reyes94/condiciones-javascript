let cantidad1 = document.querySelector("#cantidad1");
let cantidad2 = document.querySelector("#cantidad2");
let cantidad3 = document.querySelector("#cantidad3");
let verificar = document.querySelector("#verificar");
let mensaje = document.querySelector("#mensaje");

verificar.addEventListener("click", () => {
    let total = (Number(cantidad1.value) + Number(cantidad2.value) + Number(cantidad3.value));

    if (total === 0) {
        mensaje.textContent = "Debes ingresar un valor";
        return;
    }

    if (cantidad1.value < 0 || cantidad2.value < 0 || cantidad3.value < 0) {
        mensaje.textContent = "Sólo puedes ingresar números enteros positivos";
        return;
    }

    if (total <= 10) {
        mensaje.textContent = `Llevas ${total} stickers`;
    }
    else if (total > 10) {
        mensaje.textContent = "Llevas demasiados stickers";
    }
});