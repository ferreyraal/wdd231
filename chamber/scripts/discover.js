import { places } from "../data/discover.mjs";

const messageBox = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("last-visit");
const now = Date.now();

if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageBox.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        messageBox.textContent = "You last visited 1 day ago.";
    } else {
        messageBox.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("last-visit", now);

const container = document.querySelector("#discover-grid");

places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("discover-card");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn more</button>
    `;

    container.appendChild(card);
});
