

async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();

        const goldSilver = data.members.filter(m => m.membershipLevel >= 2);

        const count = 3;
        const selected = goldSilver.sort(() => Math.random() - 0.5).slice(0, count);

        const container = document.querySelector(".spotlights");
        container.innerHTML = "";

        selected.forEach(member => {
            const card = document.createElement("article");
            card.classList.add("spotlight-card");
            if (member.membershipLevel === 3) {
                card.classList.add("gold");
            } else if (member.membershipLevel === 2) {
                card.classList.add("silver");
            }

            card.innerHTML = `
                <img src="images/${member.image}" alt="Logo of ${member.name}" loading="lazy">
                <h3>${member.name}</h3>
                <p class="level-tag">${member.membershipLevel === 3 ? "GOLD Member" : "SILVER Member"}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Spotlight error:", error);
    }
}

loadSpotlights();