import { fetchJSON } from "./modules/fetch.js";

async function loadProductSpotlights() {
    const data = await fetchJSON("data/products.json");
    const selected = data.products.sort(() => Math.random() - 0.5).slice(0, 3);

    const container = document.querySelector(".product-spotlights");
    container.innerHTML = "";

    selected.forEach(product => {
        const card = document.createElement("article");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p><strong>Region:</strong> ${product.region}</p>
            <p><strong>Type:</strong> ${product.type}</p>
        `;

        container.appendChild(card);
    });
}

loadProductSpotlights();
