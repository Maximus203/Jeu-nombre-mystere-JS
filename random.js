function genererNombreAleatoire(nombreDebutPlage, nombreFinPlage) {
    let nombreAleatoire = Math.random() * (nombreFinPlage - nombreDebutPlage) + nombreDebutPlage;
    return Math.floor(nombreAleatoire);
}