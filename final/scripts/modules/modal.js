export function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

export function modalBackgroundClose(modalId) {
    const modal = document.getElementById(modalId);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal(modalId);
    });
}
