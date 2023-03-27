/**Encuentra todos los personajes ficticios
 * cuyo nombre comience con la letra "A"
 * y sean mayores de 30 años
 */
function filtrarPersonajeFicticio(filtroInicial, filtroEdad){
    return personajes.filter(personaje =>
      personaje.nombre(0) === filtroInicial &&
      personaje.edad > filtroEdad  
      );
}
