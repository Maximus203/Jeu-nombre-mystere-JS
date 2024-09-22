let nombreMystere = genererNombreAleatoire(0, 100);

alert("Bienvenue dans notre Jeu.\nEssayer de deviner le nombre mystère.");
let nombreSaisie = prompt("Donner un nombre");

while (nombreMystere != nombreSaisie) {
    if (nombreMystere < nombreSaisie) {
        nombreSaisie = prompt(`Le nombre mystère est plus petit que ${nombreSaisie} \nRéessayez !`);
    }
    else if (nombreMystere > nombreSaisie) {
        nombreSaisie = prompt(`Le nombre mystère est plus grand que ${nombreSaisie} \nRéessayez !`);
    }
}
alert("Bravo 👏🏾! Vous avez trouve le nombre mystère");