import { obtenerCliente, editarCliente } from './API.js';
import { validar, mostrarAlerta } from './funciones.js';

(function(){
    document.addEventListener('DOMContentLoaded', /*ASYNC*/  () => {
        const parametrosURL = new URLSearchParams(window.location.search)
        const idCliente = parametrosURL.get('id');
        //const cliente = /*await*/ obtenerCliente(idCliente) //Otra forma de hacerlo seria poner async en el DOMContentLoaded
        mostrarCliente(idCliente);

        //Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);

        async function mostrarCliente(idCliente){
            const cliente = await obtenerCliente(idCliente);
            
            const nombre = document.querySelector('#nombre');
            nombre.value = cliente.nombre;

            const email = document.querySelector('#email');
            email.value = cliente.email;

            const telefono = document.querySelector('#telefono');
            telefono.value = cliente.telefono;

            const empresa = document.querySelector('#empresa');
            empresa.value = cliente.empresa;
        }

        function validarCliente(e){
            e.preventDefault();

            //Creamos el objeto que va a contener esos valores
            const cliente = {
                nombre: nombre.value,
                email: email.value,
                telefono: telefono.value,
                empresa: empresa.value,
                id: idCliente
            }
            console.log(cliente)
            
            //Valido que los campos tengan contenido
            //Object.values(cliente).some(valorPropiedad => valorPropiedad !== '', Podria haber aplicado el some tambien pero tendria que cambiar la condicion ya que el some verifica que uno cumpla, y every verifica que todos cumplan
            if(!validar(cliente)){ //Some busca si alguno no cumple.
                mostrarAlerta('Todos los campos son obligatorios');
                return;
            }

            //Reescribe el objeto
            editarCliente(cliente)
        }
    })
})();