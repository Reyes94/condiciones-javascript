let imagen = document.querySelector("#imagen");

imagen.addEventListener("click", () =>{

if(imagen.classList.contains("custom")) {
    imagen.classList.remove("custom");
} else {
    imagen.classList.add("custom")
}
})