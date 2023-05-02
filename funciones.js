
function Bienvenidos(){
    alert("Bienvenidos a la pagina de desarrollo personal");
}


function promptFiltrar(){
    prompt1 = parseInt(
        prompt("Filtrar por: " + " 1: Nombre" + " 2: Menor Precio " + " 3: Mayor Precio" + "4: Tipo")
    );
}


function filtrarNombre(){
    
        let promptNombre = prompt ("Coloque el nombre");
        filtrado = productos.filter((item) => {
            return item.nombre.toLowerCase().includes(promptNombre.toLowerCase());
        }); 
}


function filtrarMayorprecio(){
   
        valor2 = prompt ("filtrado por Mayor precio");
        filtrado = productos.filter((item) => {return item.precio >= valor2});
}

function filtrarMenorprecio(){
   
    valor2 = prompt ("filtrado por Menor precio");
    filtrado = productos.filter((item) => {return item.precio <= valor2});
}


function filtrarTipo(){
        let promptTipo = prompt ("filtrado por tipo");
        filtrado = productos.filter((item) => {
            return item.tipo.toLowerCase().includes(promptTipo.toLowerCase());
        });
}

