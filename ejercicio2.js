function filtrarOcupacionDominioEmail(filtroOcpacion, filtroDominioEmail){
    return personajes.filter( personaje =>
        personaje.ocupacion.includes(filtroOcupacion)&&
        personaje.ocupacion.includes(filtroDominioEmail)
        );
