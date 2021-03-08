function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  console.assert(
      validarNombre("Fabricio") === "",
      "validarNombre fallo con un nombre valido"
  );
}




function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return "el campo no debe estar vacio"
    }
    console.assert(
        validarCiudad("Buenos Aires") === "",
        "Validar ciudad no funciono con una ciudad valida"
    )
    console.assert(
        validarCiudad("") === 0
    );
}

