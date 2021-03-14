function probarValidarNombre() {
    console.assert(
      validarNombre('') === 
      'Este campo debe tener al menos 1 caracter',
      'validarNombre no validó que el nombre no sea vacío',
  );
    console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'validarNombre no validó que el nombre sea menor a 50 caracteres',
  );
    console.assert(
      validarNombre("Fabricio") === "",
      "validarNombre fallo con un nombre valido"
  );
    console.assert(
        validarNombre("123123") === "El campo nombre solo acepta letras",
        "validarNombre no validó que el nombre solo tenga letras"
    )
}


function probarValidarCiudad(){
    console.assert(
        validarCiudad("") ===
        'Este campo debe tener al menos 1 caracter',
        'validarCiudad no validó que la ciudad no sea vacío',
    );
    console.assert(
        validarCiudad(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'validarCiudad no validó que la ciudad sea menor a 50 caracteres',
    )
    console.assert(
        validarCiudad("Buenos Aires") === "",
        "validarCiudad no funciono con una ciudad valida"
    );
    
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo("") ===
        'Este campo debe tener al menos 1 caracter',
        'validarDescripcionRegalo no validó que la ciudad no sea vacío',
    );
    console.assert(
        validarDescripcionRegalo(".,.,.,.,") === 
        "El campo descripcion solo puede tener numeros y letras",
        "La funcion validarDescipcionRegalo no valido que sólo tenga numeros y letras")
    console.assert(
        validarDescripcionRegalo(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
            'Este campo debe tener menos de 100 caracteres',
            'validarDescripcionRegalo no validó que la ciudad sea menor a 100 caracteres',
        )
    console.assert(
        validarDescripcionRegalo("Buenos Aires") === "",
        "validarDescripcionRegalo no funciono con una ciudad valida"
    );
    
}
probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
 //NOS QUEDAMOS EN EL MINUTO 50:14 CLASE 8