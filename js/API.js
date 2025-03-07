const url = 'http://localhost:4000/clientes';

//funcion para crear un nuevo cliente, lo llamamos desde el archivo nuevoCliente.js y le pasamos por parametro el cliente que ingresa el usuario
export const nuevoCliente = async cliente => {
    try{
        //Le indicamos al fetch que no seria un get sino un POST
        await fetch(url, {
            method: 'POST',
            //El body que mandamos a guardar a la API, convertimos el objeto a String para guardarlo
            body: JSON.stringify( cliente ),
            headers: {
                'Content-type': 'application/json'
            }
        })
        //Redireccionar si se aplica con éxito
        window.location.href = 'index.html';
    } catch(error){
        console.log(error);
    }
}

//Obtener todos los clientes
export const obtenerClientes = async () => {
    try{
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch(error){
        console.log(error);
    }
}

//Eliminar Cliente
export const eliminarCliente = async id => {
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        }) 
    } catch(error){
        console.log(error);
    }
}

//Obtener un cliente por su id
export const obtenerCliente = async id => {
    try{
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch(error){
        console.log(error);
    }
}

//Actualizar un cliente
export const editarCliente = async cliente => {
    try{
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'; //Si pasa por el try, lo mandamos nuevamente al index
    } catch(error){
        console.log(error);
    }
}