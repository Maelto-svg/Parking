// Get modal elements
const modal = document.getElementById("modal");
const reserveBtn = document.getElementById("reserveBtn");
const closeBtn = document.getElementById("closeBtn");

// Show modal when "Reserve a Spot" is clicked
reserveBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevents the default link behavior
  modal.style.display = "flex"; // Show the modal with flex display
});

// Hide modal when close button is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Hide modal when clicking outside of modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Select all parking spots
const parkingSpots = document.querySelectorAll(".parking-slot");

// Check if parking spots were selected
if (parkingSpots.length > 0) {
  console.log("Parking spots found:", parkingSpots.length);

  // Loop through each parking spot and add a click event listener
  parkingSpots.forEach(spot => {
    spot.addEventListener("click", () => {
      // Check the current status and toggle to the next status
      if (spot.classList.contains("available")) {
        spot.classList.remove("available");
        spot.classList.add("reserved");
        spot.textContent = "Reserved";
      } else if (spot.classList.contains("reserved")) {
        spot.classList.remove("reserved");
        spot.classList.add("occupied");
        spot.textContent = "Occupied";
      } else if (spot.classList.contains("occupied")) {
        spot.classList.remove("occupied");
        spot.classList.add("available");
        spot.textContent = "Available";
      }
      
      // Log the current status to the console for debugging
      console.log(`Spot ${spot.textContent} status changed`);
    });
  });
} else {
  console.log("No parking spots found. Check your HTML structure and class names.");
}