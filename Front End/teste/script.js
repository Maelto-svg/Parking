// Get elements
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