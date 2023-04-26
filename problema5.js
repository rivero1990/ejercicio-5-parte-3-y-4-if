const CANT_MAX_MASCOTAS = 3;
const CANT_MAX_GATOS = 1;
const CANT_MAX_PERROS = CANT_MAX_MASCOTAS;
const CANT_POR_DEF = 0;
const PASEO_TIEMPO_MAX = 60;
const PASEO_TIEMPO_MIN = 30;
const PRECIO_PERRO = 50;
const PRECIO_GATO = 75;
const COSTO_POR_MINUTO = 2;

let precios = confirm("Precios actuales : \nPerros = 50 dolares \nGato = 75 dolares");
let consultaMascota = prompt("Quiere pasear perros o un gato?");
let cantDeMascotas = prompt("Ingrese la cantidad de mascotas");
let cantDeTiempo = prompt("Cuantos minutos le gustaria pasear a su mascota?");
let feriaCoin = confirm("Bienvenido al portal de pagos feriaCoin");
let opcionUno = "perros";
let opcionDos = "gato";

if ((consultaMascota == opcionUno) && (cantDeMascotas <= CANT_MAX_PERROS) && ( cantDeMascotas > CANT_POR_DEF)) {
    if ((cantDeTiempo >= PASEO_TIEMPO_MIN) && (cantDeTiempo <= PASEO_TIEMPO_MAX))
    document.write("Su pago mediante feriacoin fue exitoso : monto total " + ((cantDeTiempo * COSTO_POR_MINUTO) + (cantDeMascotas * PRECIO_PERRO))+ " dolares");
} else if ((consultaMascota == opcionDos) && (cantDeMascotas == CANT_MAX_GATOS) && (cantDeMascotas > CANT_POR_DEF)) {
    if ((cantDeTiempo >= PASEO_TIEMPO_MIN) && (cantDeTiempo <= PASEO_TIEMPO_MAX))
    document.write("Su pago mediante feriacon fue exitoso : monto total " + ((cantDeTiempo * COSTO_POR_MINUTO) + (cantDeMascotas * PRECIO_GATO)) + " dolares");
}

else {
    document.write("Su pago no se efectuo : algun dato es incorrecto intente nuevamente");
}
