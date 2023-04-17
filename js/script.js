document.getElementById("boton").onclick = function() {
    alert("Suscripción realizada con éxito");
}

// funcion para cambiar el mapa de la pagina
let x
function mapa(x) {
    if (x == 1) {
        document.getElementById("mapa").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5521.193093316737!2d-58.42857763986391!3d-34.63143523701974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbab81e87a1f%3A0x9abe8908013c7382!2sAv.%20La%20Plata%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1681758836558!5m2!1ses-419!2sar";
    } else {
        document.getElementById("mapa").src =  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.282363057753!2d-58.4737728!3d-34.5210735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb152706d77b9%3A0xdb321dc3c193c2cc!2sAv.%20del%20Libertador%201313%2C%20B1638%20Vicente%20L%C3%B3pez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1681768747570!5m2!1ses-419!2sar"   }
}   

document.getElementById("laplata").addEventListener("click", mapa());
document.getElementById("vic-lopez").addEventListener("click", mapa());

// ---------------------------------------------------------------------
