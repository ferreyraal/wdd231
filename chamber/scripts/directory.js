async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Loading data error', error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
      <img src="images/${member.image}" alt="Logo de ${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p class="address">${member.address}</p>
      <p class="phone">${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
      <p class="level"><strong>Nivel:</strong> ${getLevelName(member.membershipLevel)}</p>
      <p class="description">${member.description}</p>
    `;

        container.appendChild(card);
    });
}

function getLevelName(level) {
    switch (level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Known";
    }
}

const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');
const container = document.getElementById('members-container');

gridBtn.addEventListener('click', () => {
    container.classList.add('grid-view');
    container.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
    container.classList.add('list-view');
    container.classList.remove('grid-view');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});



loadMembers();



