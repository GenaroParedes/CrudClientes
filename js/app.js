import { obtenerClientes, eliminarCliente } from "./API.js";

//Utilizamos un IFI para que no pueda ser accedido desde otro archivo js a no ser que lo exportemos
(function(){
    const listadoClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarClientes)
    listadoClientes.addEventListener('click', confirmarEliminar)

    async function mostrarClientes(){
        const clientes = await obtenerClientes();
        
        clientes.forEach(cliente => {
            const {id, nombre, email, telefono, empresa} = cliente;

            const row = document.createElement('tr');
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listadoClientes.appendChild(row);
        })
    }

    function confirmarEliminar(e){
        if(e.target.classList.contains('eliminar')){
            //Json-server te coloca un data-cliente automaticamente en cada registro
            const clienteID = e.target.dataset.cliente;
            const confirmar = confirm('Deseas eliminar el cliente?');
            if (confirmar){
                eliminarCliente(clienteID);
                const filaCliente = document.querySelector(`[data-cliente="${clienteID}"]`).closest('tr');
                filaCliente.remove();
            }
        }
    }
})();