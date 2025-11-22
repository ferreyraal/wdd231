
document.addEventListener("DOMContentLoaded", () => {
    const stamp = document.getElementById("timestamp");
    if (stamp) {
        stamp.value = new Date().toISOString();
    }
});


document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".membership-card");
    const modals = document.querySelectorAll(".modal-overlay");
    const closeButtons = document.querySelectorAll(".close-modal");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const modalId = card.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.add("show");
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const modal = e.target.closest(".modal-overlay");
            modal.classList.remove("show");
        });
    });

    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
            }
        });
    });
});
