/**
 * Encuentra todos los personajes ficitios
 * que trabajen en ocupaciones relacionada con "marketing"
 * y tengan apellidos de 6 carácteres o más
 */
function filtrarPersonajeFicticio(filtroOcupacion= Marketing , filtroApellido){
    return personaje.filter(personaje =>
        personaje.ficticio.includes (filtroOcupacion = Marketing)&&
        personaje.ficticio.includes (filtroApellido + "6 carácteres")
        );
}
