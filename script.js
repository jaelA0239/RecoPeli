function recomendar(genero) {
    const edad = parseInt(document.getElementById('edad').value);
    let recomendacion = "";
  
    if (isNaN(edad)) {
      recomendacion = "Por favor, ingresa una edad válida.";
    } else {
      switch (genero) {
        case 'Drama':
          recomendacion = edad < 18 
            ? "Recomendamos: 'El niño que domó el viento'" 
            : "Recomendamos: 'En busca de la felicidad'";
          break;
        case 'Comedia':
          recomendacion = edad < 18 
            ? "Recomendamos: 'Minions'" 
            : "Recomendamos: '¿Qué pasó ayer?'";
          break;
        case 'Musical':
          recomendacion = edad < 18 
            ? "Recomendamos: 'Sing: ¡Ven y canta!'" 
            : "Recomendamos: 'La La Land'";
          break;
        case 'Crimen':
          recomendacion = edad < 18 
            ? "Recomendamos: 'Mystery Kids Detectives'" 
            : "Recomendamos: 'El Padrino'";
          break;
      }
    }
  
    document.getElementById('recomendacion').innerText = recomendacion;
  }