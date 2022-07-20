function sumaNumeroCaracteresParoImpar(array) {
    var suma = 0;
    for (var x = 0; x < array.length; x++) {
        suma = suma + array[x].length;
    }
    if (suma % 2 == 0) {
        console.log("El resultado es par");
    }
    else {
        console.log("El resultado es impar");
    }
    console.log(suma);
    return suma;
}
sumaNumeroCaracteresParoImpar(["Casa", "Coche", "Ciudad", "Cesta"]);
sumaNumeroCaracteresParoImpar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
sumaNumeroCaracteresParoImpar(["Venezuela", "Veneno", "Voltaje"]);
sumaNumeroCaracteresParoImpar(["Pepe"]);
