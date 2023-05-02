
const productos = [];


    productos.push(new Producto("1 - gestion de proyectos","Gestion",1500,1));
    productos.push(new Producto("2 - el mejor lider","gestion",1600,2));
    productos.push(new Producto( "3 - liderazgo y getion de equipos","gestion",2000,3));
    productos.push(new Producto( "4 - inteligencia emocional","desarrollo personal",2500,4));
    productos.push(new Producto("5 - habilidades comunicativas","desarrollo personal",1800,5));
    productos.push(new Producto("6 - creacion y gestion de equipos","gestion",3500,6));
    productos.push(new Producto("7 - 7 secretos de un CEO", "gestion",2000,7));
    productos.push(new Producto("8 - padre rico y padre pobre","negocios",1600,8));
    productos.push(new Producto("9 - pience y hagase rico","negocios",1600,9));
    productos.push(new Producto("10 - finanzas personales","desarrollo personal",1600,10));




let prompt1;
let filtradoCodigo;
let valor;
let valor2;
let filtrado;
let seleccion;
let filtrar;
let eliminar;
let primerElemento;
let primerElemento2;
let precio = 0;
let carrito = [];





Bienvenidos();

seleccion = prompt (" Hola desea comprar un producto indique si o no");

while(seleccion != "si" && seleccion != "no"){
    alert(" por favor ingresa si o no");
    seleccion = prompt ("Hola desea comprar algo si o no");
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos");
    console.log(productos)

    let todoslosProductos = productos.map((item) => item.nombre + " $ " + item.precio);

    alert(todoslosProductos.join(" - "));

    filtrar = prompt("¿ Desea colocar un filtro? si o no")

    if(filtrar == "si"){
        promptFiltrar();
        if(prompt1 === 1){
            filtrarNombre();
            console.log("Filtrado por el nombre")
            console.log(filtrado);
        } else if(prompt1 === 2){ 
                filtrarMenorprecio();
                console.log("Filtrado por el menor precio")
                console.log(filtrado);
            } else if(prompt1 === 3){ 
                filtrarMayorprecio();
                console.log("Filtrado por el mayor precio")
                console.log(filtrado);

                } else if(prompt1 === 4){ 
                    filtrarTipo();
                    console.log("Filtrado por el tipo")
                    console.log(filtrado);
                }
    } 

    alert("¿Que libro desea comprar?");

} else if (seleccion =="no"){
    alert("gracias por venir");
}


while(seleccion != "no"){
    
    valor = prompt(" coloca el codigo del Cursos")
    const elementoEncontrado = productos.find((elem) => { return elem.codigo == valor});
    
    console.log("A agregado al carrito el siguiente curso: ")
    console.log(elementoEncontrado);
    carrito.push(elementoEncontrado)
    
    console.log("el carrito tiene los siguientes cursos")
    console.log(carrito);

    seleccion = prompt("¿Desea seguir comprando?");

    while(seleccion === "no"){
        
        
        eliminar = prompt("Desea eliminar un producto del carrito si o no");

        if(eliminar == "si"){  // Eliminar un elemento del carrito

            console.log(" va a eliminar un producto del carro")
            primerElemento = prompt("que elemento desea eliminar del carro coloque el numero de la posicion ");
            primerElemento2 = primerElemento - 1;


            carrito.splice(primerElemento2,1); ////elimino 1 elemento en la posicion  que le asigne con la variable primerElemento;
            console.log(carrito);

        }
            alert("gracias por la compra");

            const totalCarrito = carrito.reduce((total,item) => { return total + item.precio}, 0);
            console.log(totalCarrito);
            console.log("el total a paga es : " + totalCarrito);
            alert("el total a paga es : " + totalCarrito);
    break;
    }
}