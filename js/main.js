function probarValidarNombre(nombre){
    if (nombre.length === 0){
        return "El campo nombre debe tener por lo menos un caracter";
    }

    if (nombre.length >= 50){
        return "El campo nombre debe tener menos de 50 caracteres"
    }

    if(/^[A-z]+$/.test(nombre)){

    }
    return "";
}

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return "El campo ciudad no puede estar vacio";
    }
    return"";
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length >=100) {
        return "El campo descripcion es muy largo";
    }else if (descripcionRegalo.length === 0){
        return "El campo descripcion no puede estar vacio";
    }else{
        return "";
    }
}