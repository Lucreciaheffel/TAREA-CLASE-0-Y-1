// let nombres = "lucrecia";
// let apellido = "heffel";
// console.log(nombres + " " + apellido);
// let numberone=120;
// let numbertwo=20;
// let resultsuma= numberone + numbertwo;
// console.log("Suma:",resultsuma);
// let resultsumafinal= resultsuma + 15;
// console.log("SUMA FINAL:",resultsumafinal);

// let nota =  3;
// if (nota <4) {
//     console.log("Aplazado");
// } else if (nota < 7) {
//     console.log("desaprobado");
// } else if (nota < 9) {
//     console.log("Aprobado");
// } else {
//     console.log("Sobresaliente");
// }
// let expr= "milanesa";
// switch (expr) {
//     case "Hola" :
//         console.log ("Buenos Dias");
//         break;
//         case "Adios":
//         console.log ("Hasta Pronto");
//         break;
//         case "Ayuda":
//             console.log ("En que te puedo ayudar");
//             break;
//             default:
//                 console.log ("Disculpa no te entiendo")
// }
// let nombre = ["Diego", "Anabel", "Esteban"];
// console.log(nombre);
// console.log(nombre[0]);
// console.log(nombre[2]);
// console.log("Cantidad de nombres:", nombre.length);
// for(let i=0; i< nombre.length; i++){
//     console.log(nombre [i])
// }

/*let topping = "oreo";
let precio = 0;
let preciofinal = 0;
let helado = 400;

if (topping == "oreo"){
    precio= 10;
}
    else if (topping== "kitkat"){
        precio=15;
}
else if (topping== "kinder"){
    precio=25;
}
else {
    console.log("No tenemos este topping");
}
preciofinal = helado + precio;
console.log("El helado cuesta:$" + preciofinal);

let menu= "carne";
switch (menu) {
     case "carne" :
         console.log ("Te recomiendo como bebida vino tinto");
         break;
         case "pescado":
         console.log ("Te recomiendo como bebida vino blanco");
         break;
         case "verdura":
             console.log ("Te recomiendo como bebida agua");
             break;
             default:
                 console.log ("Elija carne, pescado o verdura");
                 }

let animales =["Perro", "Gato", "Tortuga", "Pajaro"];

for(let i=0; i< animales.length; i++){
    console.log(animales[i])
}
animales.push ("hamster");
for(let i=0; i< animales.length; i++){console.log(animales[i])
}

let numero = 20;
while (numero < 11) {
console.log("numero es mas chico que 11");
numero++;
}

let num=8;
let sum=0;
while (num<=10) {
    sum += num; 
    num++;   
  }
  
  console.log("La suma de los números del 1 al 10 es: " + sum);
  
  let total;
  let numero1=3;
  let numero2=5;
  function sym (){
    total=numero1 + numero2;
    alert("el resultado es "+ total);
  }
  sym()

 
let number=prompt("Introduce un numero entero");
let result=parImpar(number);
alert("el numero " +number+"es "+result);
function parImpar(number){
    if(number % 2 == 0){
    return "par";
    }
    else{
    return "impar";
    }
}*/


let nom = prompt("ingrese nombre");
function saludo() {
    if (nom) {
        alert("bienvenido " + nom);
    }
    else {
        alert("debe ingresar un nombre");
    }
}
saludo();