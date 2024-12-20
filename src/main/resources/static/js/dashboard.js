// Modal Elements
const registerIcon = document.getElementById("register-icon");
const modal = document.getElementById("auth-modal");
const closeModal = document.getElementById("close-modal");
const loginBtn = document.getElementById("login-btn");
const createAccountBtn = document.getElementById("create-account-btn");
const loginForm = document.getElementById("login-form");
const createAccountForm = document.getElementById("create-account-form");

// Open Modal
registerIcon.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    resetForms();
});

// Close Modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        resetForms();
    }
});

// Show Login Form
loginBtn.addEventListener("click", () => {
    loginForm.style.display = "block";
    createAccountForm.style.display = "none";
});

// Show Create Account Form
createAccountBtn.addEventListener("click", () => {
    createAccountForm.style.display = "block";
    loginForm.style.display = "none";
});

// Reset Forms
function resetForms() {
    loginForm.style.display = "none";
    createAccountForm.style.display = "none";
}

// Select all spots
const parkingSlots = document.querySelectorAll(".parking-slot");

// Click event for each spot
parkingSlots.forEach((slot) => {
    slot.addEventListener("click", () => {
        const status = slot.getAttribute("data-status");

        if (status === "available") {
            slot.setAttribute("data-status", "reserved");
            slot.classList.remove("available");
            slot.classList.add("reserved");
            slot.textContent = "Reserved";
        } else if (status === "reserved") {
            slot.setAttribute("data-status", "occupied");
            slot.classList.remove("reserved");
            slot.classList.add("occupied");
            slot.textContent = "Occupied";
        } else if (status === "occupied") {
            slot.setAttribute("data-status", "available");
            slot.classList.remove("occupied");
            slot.classList.add("available");
            slot.textContent = slot.textContent.slice(0, 2);
        }
    });
});