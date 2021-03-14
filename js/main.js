function validarNombre(nombre){
    if (nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter"
    }
    else if(nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres"
    }
    if(!/^[A-z]+$/.test(nombre)){
        return "El campo nombre solo acepta letras"
    }else
        return "";
}
function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }
    else if(ciudad.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }else
        return "";
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length >=100) {
        return "Este campo debe tener menos de 100 caracteres";
    }else if (descripcionRegalo.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }else if(!/[a-z0-9]+$/i.test(descripcionRegalo)){
        return "El campo descripcion solo puede tener numeros y letras"
    }
    //Se agraga la "i" para que no importen las mayusculas, antes no se usó por "[A-z]"
    //Para agregar . , y espacios else if(!/[a-z0-9,\. ]+$/.test(descripcionRegalo))
    else
        return "";
}
 function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa");
    const errorNombre = validarNombre($form.nombre.value);
    const nombre = $form.nombre.value;
    //Es lo mismo que poner: nombre = document.querySelector("#nombre").nodeValue;
    //Siempre es con el "name", por el simbolo de resta no se utiliza en "descripcion regalo"
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form.querySelector("#descipcion-regalo").value;     
    
    manejarErrores([errorNombre]);
    
    event.preventDefault();
}
function manejarErrores(errores){
    errorNombre = errores[0]; //nombre

    if(errorNombre){
        $form.nombre.className = "error";
    }else{
        $form.nombre.className = "";
    }
}


validarFormulario();