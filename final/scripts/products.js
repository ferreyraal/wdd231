import { fetchJSON } from "./modules/fetch.js";
import { openModal, closeModal, modalBackgroundClose } from "./modules/modal.js";

let productsData = [];

async function loadProducts() {
    const data = await fetchJSON("data/products.json");
    productsData = data.products;

    populateFilters(productsData);
    displayProducts(productsData);
}

function populateFilters(products) {
    const regionSelect = document.getElementById("filter-region");
    const typeSelect = document.getElementById("filter-type");

    const regions = [...new Set(products.map(p => p.region))];
    const types = [...new Set(products.map(p => p.type))];

    regions.forEach(r => regionSelect.appendChild(new Option(r, r)));
    types.forEach(t => typeSelect.appendChild(new Option(t, t)));

    regionSelect.addEventListener("change", applyFilters);
    typeSelect.addEventListener("change", applyFilters);
}

function applyFilters() {
    const r = document.getElementById("filter-region").value;
    const t = document.getElementById("filter-type").value;

    let filtered = [...productsData];

    if (r) filtered = filtered.filter(p => p.region === r);
    if (t) filtered = filtered.filter(p => p.type === t);

    displayProducts(filtered);
}

function displayProducts(products) {
    const container = document.getElementById("products-list");
    container.innerHTML = "";

    products.forEach(product => {
        const row = document.createElement("div");
        row.classList.add("product-row");

        row.innerHTML = `
            <span>${product.name}</span>
            <span>${product.region}</span>
            <span>${product.type}</span>
            <button class="more-btn">More</button>
        `;

        row.querySelector(".more-btn").addEventListener("click", () => openProductModal(product));

        container.appendChild(row);
    });
}

function openProductModal(product) {
    const modalId = "product-modal";
    const body = document.getElementById("product-modal-body");

    body.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p><strong>Region:</strong> ${product.region}</p>
        <p><strong>Type:</strong> ${product.type}</p>
        <p><strong>Price:</strong> $${product.price_usd} USD</p>
        <p>${product.description}</p>
        <p><a href="${product.how_to_make_link}" target="_blank">How to make it (video)</a></p>
    `;

    openModal(modalId);
}

document.getElementById("product-modal-close").onclick = () => closeModal("product-modal");
modalBackgroundClose("product-modal");

loadProducts();
