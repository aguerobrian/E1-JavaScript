// *************** este fue el primer intento de hacer los objetos************




//                          *********REVISAR EL EJERCICIO 4********



//array de objetos

const menu = [
    {
        id:1,
        nombre: "muzzarela",
        ingredientes: ["muzzarela","salsa"],
        precio: 1200,
    },

    {
        id:2,
        nombre: "caprese",
        ingredientes: ['muzzarela','albahaca','tomate'],
        precio: 1400,
    },

    {
        id:3,
        nombre: "especial",
        ingredientes: ['muzzarela','jamon','morron'],
        precio: 1450,
    },

    {
        id:4,
        nombre: "calabresa",
        ingredientes: ['muzzarela','longaniza'],
        precio: 1300,
    },

    {
        id:5,
        nombre: "fugazzeta",
        ingredientes: ['muzzarela','cebolla'],
        precio: 1500,
    },

    {
        id:6,
        nombre: "napolitana",
        ingredientes: ['muzzarela','salsa','tomate'],
        precio: 1450,
    },

    {
        id:7,
        nombre: "super pancho",
        ingredientes: ['pan','salchicha','papas'],
        precio: 500
    },
    {
        id:8,
        nombre: "chori pan",
        ingredientes: ['pan','chorizo',,],
        precio: 550
    },
    {
        id:9,
        nombre: "paty de cancha",
        ingredientes: ['pan','hamburguesa','huevo',],
        precio: 600
    },

    

    
    
]




//************primer Ejercicio************** */

console.log("a)  ID PAR O IMPAR");

for (let index = 0; index < menu.length; index++) { // aca recorremos con un FOR 
    if (menu[index].id % 2 != 0) {                  // comparamos el resto del index es distinto a 0
        console.log("El menu: " + menu[index].nombre + " tiene el ID impar " + menu[index].id); //consologeamos
    }

}

console.log("***********************");





//***************segundo Ejercicio************* */

console.log("b) ¿PRECIO MENOR A de $600?");

console.log("Los con un valor menor a $600 son : ")

for (let index = 0; index < menu.length; index++) { // lo mismo, recorremos el array con un for
    if (menu[index].precio <= 600) {                //condicionamos... si el precio es menos o igual a 600    
        console.log(menu[index].nombre + " con el ID " + menu[index].id + " ($" + menu[index].precio + ")"); 
    }

}

console.log("***********************");





//******************tercer Ejercicio*************** */

console.log("c) El nombre de cada menu con su respectivo precio.");

for (let index = 0; index < menu.length; index++) {  //recorremos la logitud del array y mostramos en consola su nombre y precio

    console.log("El menu " + menu[index].nombre + " tiene un valor de: $" + menu[index].precio); //

}

console.log("***********************");





//*************cuarto Ejercicio********** */

console.log("d) Todos los ingredientes de cada menu ");

for (let index = 0; index < menu.length; index++) { // recorremos el array con un for

    console.log("El menu " + menu[index].nombre + " tiene los siguientes ingredientes:"); // mostramos en consola
    
for (let index1 = 0; index1 < menu[index].ingredientes.length; index1++) { // en este punto tuve problemas para recorrer.. en la parte de la condicion... si bien asi como esta se muestra en pantalla, algunos elementos tienen mas elementos que otros.. entonces los que tienen 2 ingredientes me tira undefine

    console.log(menu[index].ingredientes[index1]);
    
}


}















//*************** este fue el segundo intento de crear objetos que no estoy seguro si esta bien*******************

// class PizzaMuzzarela {
//     constructor(id=1,nombre="muzzarela",ingredientes=["queso muzzarela","salsa"],precio=1200){
//         this.id = id
//         this.nombre = nombre
//         this.ingredientes = ingredientes
//         this.precio = precio
//     }

// }


