export function mostrarAlerta(mensaje){
    const alertaPrevia = document.querySelector('.alerta');

    if(!alertaPrevia){
        const alerta = document.createElement('p');
        //Tailwind
        alerta.classList.add('alerta', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validar(obj){
    //every verifica si todos los elementos de un array cumplen con una condicion, si la cumplen devuelve true, sino false
    return Object.values(obj).every(valorPropiedad => valorPropiedad !== '')
    //some deberia ir === '', ya que con que uno solo sea igual a vacio '' devuelve true
}