/**
 * 
 Encuentra todos los personajes ficticios
 cuya edad esté entre 18 y 25 años,
 y sean de género femenino

 */
function filtarEdad18y25GeneroFemenino (filtroEdadMin, filtroEdadMax){
    return personajes.filter(personaje =>
        personaje.edaD >= filtroEdadMin &&
        personaje.edad >= filtroEdadMax &&
        personaje.edad === filtroGenero
        );
