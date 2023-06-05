function imprimirResultados(name){
    console.log($form[name].value);
}

const $form = document.formulario;

document.querySelector('#enviar-carta').onclick = function () {

    imprimirResultados('nombre');
    imprimirResultados('ciudad');
    imprimirResultados('comportamiento');
    imprimirResultados('descripcion-regalo');
}
