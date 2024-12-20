// Floor def
const totalFloors = 4;
const slotsPerFloor = 100;

// Generate spots
function generateSlots(floorId, floorLabel) {
    const floorElement = document.querySelector(`#${floorId} .parking-grid`);
    for (let i = 1; i <= slotsPerFloor; i++) {
        const slot = document.createElement("div");
        slot.className = "parking-slot available";
        slot.setAttribute("data-status", "available");
        slot.textContent = `${floorLabel}${i}`;
        floorElement.appendChild(slot);

        // Change status
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
                slot.textContent = `${floorLabel}${i}`;
            }
        });
    }
}

// Gerar vagas para cada andar
generateSlots("floor-1", "A");
generateSlots("floor-2", "B");
generateSlots("floor-3", "C");
generateSlots("floor-4", "D");

// Seleção de andar com botões
const floorButtons = document.querySelectorAll(".floor-btn");
const floors = document.querySelectorAll(".floor");

// Adiciona evento de clique aos botões
floorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFloor = button.getAttribute("data-floor");

        // Remove a classe ativa de todos os botões
        floorButtons.forEach((btn) => btn.classList.remove("active"));

        // Adiciona a classe ativa ao botão clicado
        button.classList.add("active");

        // Esconde todos os andares
        floors.forEach((floor) => floor.classList.remove("active"));

        // Mostra o andar selecionado
        document.getElementById(selectedFloor).classList.add("active");
    });
});

// Mostrar o primeiro andar por padrão
document.querySelector(".floor-btn").classList.add("active");
document.getElementById("floor-1").classList.add("active");