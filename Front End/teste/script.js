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