import { fetchJSON } from "./modules/fetch.js";
import { openModal, closeModal, modalBackgroundClose } from "./modules/modal.js";

async function loadRegions() {
    const data = await fetchJSON("data/regions.json");
    displayRegions(data.regions);
}

function displayRegions(regions) {
    const container = document.getElementById("regions-container");
    container.innerHTML = "";

    regions.forEach(region => {
        const card = document.createElement("section");
        card.classList.add("region-card");

        card.innerHTML = `
            <img src="${region.image}" alt="${region.name}" loading="lazy">
            <h3>${region.name}</h3>
            <p><strong>Main City:</strong> ${region.main_city}</p>
            <button class="more-btn">More</button>
        `;

        card.querySelector(".more-btn").addEventListener("click", () => {
            openRegionModal(region);
        });

        container.appendChild(card);
    });
}

function openRegionModal(region) {
    const modalId = "region-modal";
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
        <span id="close-modal">&times;</span>
        <h2>${region.name}</h2>
        <img src="${region.image}" alt="${region.name}">
        <p><strong>Main City:</strong> ${region.main_city}</p>
        <p><strong>Top vacation spot:</strong> ${region.top_vacation_spot}</p>
        <p><strong>Provinces:</strong> ${region.provinces.join(", ")}</p>
        <p><strong>Typical Products:</strong> ${region.products.join(", ")}</p>
        <p><strong>Average temperature:</strong> ${region.average_temperature}</p>
        <p><strong>Population:</strong> ${region.population_estimate.toLocaleString()}</p>
        <p><strong>Travel distance from BA:</strong> ${region.distance_from_buenos_aires_km} km</p>
    `;

    document.getElementById("close-modal").onclick = () => closeModal(modalId);

    modalBackgroundClose(modalId);
    openModal(modalId);
}

loadRegions();
