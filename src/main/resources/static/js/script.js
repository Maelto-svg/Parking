// script.js

document.addEventListener("DOMContentLoaded", function() {
    const parkingGrid = document.querySelector(".parking-grid");

    // Appeler l'API pour obtenir les places de parking
    fetch("/api/parking/spots") // Modifier avec l'URL correcte de ton endpoint
        .then(response => response.json())
        .then(data => {
            // Générer les places de parking dans la grille
            data.forEach(spot => {
                const spotElement = document.createElement("div");
                spotElement.classList.add("parking-spot");

                // Ajouter une classe en fonction de l'état
                if (spot.isOccupied) {
                    spotElement.classList.add("occupied");
                } else {
                    spotElement.classList.add("available");
                }

                // Ajouter le numéro de place
                spotElement.textContent = spot.spotNumber;

                // Ajouter la place dans la grille
                parkingGrid.appendChild(spotElement);
            });

            // Ajouter des flèches d'entrée/sortie
            const entryArrow = document.createElement("div");
            entryArrow.classList.add("entry-arrow");
            entryArrow.textContent = "↓";
            parkingGrid.appendChild(entryArrow);

            const exitArrow = document.createElement("div");
            exitArrow.classList.add("exit-arrow");
            exitArrow.textContent = "↑";
            parkingGrid.appendChild(exitArrow);
        })
        .catch(error => console.error("Erreur lors du chargement des places de parking :", error));
});
