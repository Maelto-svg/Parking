// script.js
document.addEventListener("DOMContentLoaded", function () {
  const parkingGrid = document.getElementById('layout');
  const spotsPerColumn = 6; // Number of spots per column

  // Appeler l'API pour obtenir les places de parking
  fetch("/api/parking/spots")
      .then(response => response.json())
      .then(data => {
          let currentColumn;

          // Générer les places de parking dans la grille
          data.forEach((spot, index) => {
              // Créer une nouvelle colonne si nécessaire
              if (index % spotsPerColumn === 0) {
                  currentColumn = document.createElement("div");
                  currentColumn.classList.add("parking-column");
                  parkingGrid.appendChild(currentColumn);
              }

              // Créer un élément pour une place de parking
              const spotElement = document.createElement("div");
              const avElement = document.createElement("span");

              spotElement.classList.add("parking-slot");

              // Ajouter une classe en fonction de l'état
              if (spot.isOccupied) {
                  spotElement.classList.add("occupied");
                  avElement.textContent = "Occupied";
              } else {
                  spotElement.classList.add("available");
                  avElement.textContent = "Available";
              }

              // Ajouter le numéro de place
              spotElement.textContent = spot.spotNumber;

              // Ajouter les éléments à la colonne actuelle
              currentColumn.appendChild(spotElement);
              spotElement.appendChild(avElement);
          });
      })
            // // Ajouter des flèches d'entrée/sortie
            // const entryArrow = document.createElement("div");
            // entryArrow.classList.add("entry-arrow");
            // entryArrow.textContent = "↓";
            // parkingGrid.appendChild(entryArrow);

            // const exitArrow = document.createElement("div");
            // exitArrow.classList.add("exit-arrow");
            // exitArrow.textContent = "↑";
            // parkingGrid.appendChild(exitArrow);
        .catch(error => console.error("Erreur lors du chargement des places de parking :", error));
});

// Modal functionality
const modal = document.getElementById("modal");
const reserveBtn = document.getElementById("reserveBtn");
const closeBtn = document.getElementById("closeBtn");

// Show the modal when "Reserve a Spot" is clicked
reserveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "flex";
});

// Close the modal when "X" is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Login validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validate credentials
  if (username === "admin" && password === "admin") {
    // Redirect to parking interface on successful login
    window.location.href = "parking.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const parkingSpots = document.querySelectorAll(".parking-slot");

  parkingSpots.forEach(spot => {
    spot.addEventListener("click", () => {
      const statusText = spot.querySelector("span");

      if (spot.classList.contains("available")) {
        spot.classList.remove("available");
        spot.classList.add("reserved");
        statusText.textContent = "Reserved";
      } else if (spot.classList.contains("reserved")) {
        spot.classList.remove("reserved");
        spot.classList.add("occupied");
        statusText.textContent = "Occupied";
      } else if (spot.classList.contains("occupied")) {
        spot.classList.remove("occupied");
        spot.classList.add("available");
        statusText.textContent = "Available";
      }
    });
  });
});
