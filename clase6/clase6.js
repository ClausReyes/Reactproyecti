
// setTimeout(function(){console.log("Inicio")} , 0);

// console.log("Mitad")

// console.log("final")

// promesas

// let carrrito =[];

// let agregar_a_carrito = new Promise(function(resolve, reject){
//     setTimeout (function(){
//         let tiempoCarga = Math.random();
//         if (tiempoCarga < 0.5 ) {
//             carrrito.push("Producto");
//             resolve(carrrito);
//         }
//         else{
//             reject("no se pudo cargar el producto");
//         }
//     }, 2000)
// });

// agregar_a_carrito
//                 .then(function(carrrito){
//                     console.log("se cumplio");
//                     console.log(carrrito)
//                 })

//                 .catch(function(error){
//                  console.log("Error")
//                 })

// map

// let productos=[
//     {nombre: "mouse", precio: 1000},
//     {nombre:"teclado", precio: 1000},
//     {nombre: "radio", precio: 1000},
    
//     {nombre: "lampara", precio: 1000},
// ];

// function agregarIva(obj_producto){
//     let iva = obj_producto.precio *0.21;
//     return{
//         nombre: obj_producto.nombre,
//         precio: obj_producto.precio+iva
//     }
// }

// let resultado = productos.map(agregarIva);
// console.log(resultado)