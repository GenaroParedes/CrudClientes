import { mostrarAlerta, validar} from './funciones.js';
import { nuevoCliente } from './API.js';

//Colocamos un IFFI para las funciones que deben estar unicamente en este archivo
(function(){
    //Las funciones que esten aca adentro no van a ser accedidas desde otro archivo js
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();

        //Variables de los campos del formulario
        const nombre = document.querySelector('#nombre').value; //Tomo el valor que escribió el usuario
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        //Creamos el objeto que va a contener esos valores
        const cliente = {
            nombre, //es lo mismo que escribir nombre: nombre, email:email, etc.
            email,
            telefono,
            empresa
        }
        
        //Valido que los campos tengan contenido
        //Object.values(cliente).some(valorPropiedad => valorPropiedad !== '', Podria haber aplicado el some tambien pero tendria que cambiar la condicion ya que el some verifica que uno cumpla, y every verifica que todos cumplan
        if(!validar(cliente)){ //Some busca si alguno no cumple.
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        
        nuevoCliente(cliente);
    }
})();