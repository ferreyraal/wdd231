
const courses = [
    { id: 'WDD130', title: 'WDD 130', area: 'WDD', credits: 3, completed: true },
    { id: 'WDD131', title: 'WDD 131', area: 'WDD', credits: 3, completed: false },
    { id: 'WDD231', title: 'WDD 231', area: 'WDD', credits: 3, completed: false },
    { id: 'CSE120', title: 'CSE 120', area: 'CSE', credits: 3, completed: true },
    { id: 'WDD232', title: 'WDD232', area: 'CSE', credits: 2, completed: false },
    { id: 'CSE121', title: 'CSE 121', area: 'CSE', credits: 3, completed: false }
];

function createCourseCard(course) {
    const card = document.createElement('article');
    card.className = 'course-card';
    card.setAttribute('role', 'article');
    if (course.completed) card.classList.add('completed');

    const left = document.createElement('div');
    left.innerHTML = `<strong>${course.title}</strong><div class="muted">${course.id} — ${course.area}</div>`;

    const right = document.createElement('div');
    right.innerHTML = `<span class="credits">${course.credits} cr</span>`;

    if (course.completed) {
        const badge = document.createElement('span');
        badge.className = 'completed-badge';
        badge.textContent = 'Completed';
        badge.setAttribute('aria-label', 'Completed course');
        right.appendChild(badge);
    }

    card.appendChild(left);
    card.appendChild(right);
    return card;
}

function renderCourses(filter = 'all') {
    const list = document.getElementById('course-list');
    const creditsEl = document.getElementById('credits');
    list.innerHTML = '';

    const filtered = courses.filter(c => {
        if (filter === 'all') return true;
        return c.area === filter;
    });

    filtered.forEach(c => list.appendChild(createCourseCard(c)));

    const totalCredits = filtered.reduce((sum, c) => sum + (Number(c.credits) || 0), 0);
    creditsEl.textContent = totalCredits;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCourses('all');

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget;
            const filter = target.dataset.filter;
            buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
            target.setAttribute('aria-pressed', 'true');

            renderCourses(filter);
        });
    });
});
