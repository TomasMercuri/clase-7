function validarNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }else if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    return "";
}

function validarCiudad(ciudad){
    if(ciudad === ""){
        return 'Tiene que seleccionar una opcion';
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length < 3){
        return 'Este campo debe tener al menos 3 caracteres';
    }else if(descripcionRegalo.length > 250){
        return 'Este campo debe tener como maximo 250 caracteres';
    }
    return "";
}
