//Funcion para calcular el signo del zodiaco en relacion al dia y la fech de nacimiento

function signoZodiaco(dia:number, mes:number):string
{   let signo=""
    
    if((dia>=21&&mes==3)||(dia<=20&&mes==4))
          {signo="Aries"}
    if((dia>=24&&mes==9)||(dia<=23&&mes==10))
        {signo="libra"}
    if((dia>=21&&mes==4)||(dia<=21&&mes==5))
         {signo="Tauro"}
    if((dia>=24&&mes==10)||(dia<=22&&mes==11))
         {signo="Escorpio"}
    if((dia>=22&&mes==5)||(dia<=21&&mes==6))
         {signo="Geminis"}
    if((dia>=23&&mes==11)||(dia<=21&&mes==12))
        {signo="Sagitario"}
    if((dia>=21&&mes==6)||(dia<=23&&mes==7))
        {signo="Cancer"}
    if((dia>=22&&mes==12)||(dia<=20&&mes==1))
        {signo="Capricornio"}
    if((dia>=24&&mes==7)||(dia<=23&&mes==8))
        {signo="Leo"}
    if((dia>=21&&mes==1)||(dia<=19&&mes==2))
        {signo="Acuario"}
    if((dia>=24&&mes==8)||(dia<=23&&mes==9))
         {signo="Virgo"}
    if((dia>=20&&mes==2)||(dia<=20&&mes==3))
        {signo="Piscis"}

        return signo
}
console.log(signoZodiaco(10,3));

// Funcion que te devuelve en que continente esta en relacion al pais

function queContinente(string:string):string{
    let resultado:string=""
    if(string == "angola" || string == "camerun" || string == "mozambique" || string == "marruecos" || string == "etiopia"){
        resultado = "Estas en Africa"
    }
    if(string == "francia" || string == "italia" || string == "españa" || string == "alemania" || string == "portugal"){
        resultado = "Estas en Europa"
    }
    if(string == "eeuu" || string == "argentina" || string == "colombia" || string == "ecuador" || string == "peru"){
        resultado = "Estas en America"
    }
    if(string == "china" || string == "japon" || string == "vietnam" || string == "korea" || string == "tailandia"){
        resultado = "Estas en Asia"
    }
    console.log(resultado);
    return resultado
}
queContinente("china")

//Funcion que imprime los numeros impartes entre 0 y el valor que le damos

function numerosImpartes(number:number):void{
    for(let x=0;x<number;x++){
        if(x%2 != 0){
            console.log(x);
        }
    }
}

numerosImpartes(20);

//Funcion para devolver un array revertido
function reverseArray(array:number[]):void{
    
    console.log(array.reverse()) 
}

reverseArray([1,2,3])

//Realizar funcion que nos indique si los colores dentro de un array de string  de entrada esta en el arcoiris

function estaEnArcoiris(array:string[]):void{
    
    for(let x=0;x<array.length;x++){
    if(array[x] == "rojo" || array[x] == "naranja" || array[x] == "amarillo" || array[x] == "verde" || array[x] == "añil" || array[x] =="azul" || array[x] =="violeta"){
        console.log( array[x] + " Esta dentro de el arcoiris");
    } else {
        console.log( array[x] + " No esta dentro del arcoiris"); 
    }
}
     
}

estaEnArcoiris(["azul" , "marron"])

// Funciona que devuelve si existe un numero par entre el array de numeros que le introducimos

function hayPares(array:number[]):void{
    let resultado = 0
      for (let x=0;x<array.length;x++){
          if (array[x]%2 ==0 ){
              resultado ++;
          }
  }
   if(resultado > 0){console.log("Hay algun numero par");}else{ console.log("No hay ningun numero par");}
  
  }
  hayPares([1,1,1,1,1,1])

 //Funcion que recibe array de nombres y devuelve si todos empiezan por la letra M

 function empiezanPorM(array:string[]):void{
    let resultado = 0
     for(let x=0;x<array.length;x++){
         if(array[x][0] == ("M")){
             resultado ++ ;
         }
     }
     if(resultado == array.length){console.log("Verdadero");} else{console.log("Falso");}
     
 }
 
 
 empiezanPorM(["Maria", "Maria", "Maripili", "Mama"])

 //Funcion que te devuelve la suma del numero de caracteres de las palabras almacenadas en un array

 function sumaNumeroCaracteres(array:string[]):void{
    let suma = 0
       for(let x=0;x<array.length;x++){
          suma = suma + array[x].length
       }
       console.log(suma);
   }
   
   sumaNumeroCaracteres(["pepe","maria", "jorge", "paquito"])

   //Funcion para saber si un numero es par o impar

   function numeroParoImpar(number:number):void{
    if(number%2 == 0){console.log("El numero es par");}else{console.log("El numero es impar");}
}

numeroParoImpar(3)

//Fusionamos las dos ultimas para ver si los siguientes arrays tienen un total par o impar de caracteres

function sumaNumeroCaracteresParoImpar(array:string[]){
    let suma = 0
       for(let x=0;x<array.length;x++){
          suma = suma + array[x].length
       }
       if (suma%2 ==0){console.log("El resultado es par");}else{console.log("El resultado es impar");}
       console.log(suma);
       return suma
   }

   sumaNumeroCaracteresParoImpar(["Casa", "Coche", "Ciudad", "Cesta"]);
   sumaNumeroCaracteresParoImpar(["Barco" , "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
   sumaNumeroCaracteresParoImpar(["Venezuela", "Veneno", "Voltaje"]);
   sumaNumeroCaracteresParoImpar(["Pepe"])