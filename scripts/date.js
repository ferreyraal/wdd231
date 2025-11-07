document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('copyrightYear');
    if (yearEl) {
        const now = new Date();
        yearEl.textContent = now.getFullYear();
    }

    const lastModEl = document.getElementById('lastModifiedValue');
    if (lastModEl) {
        lastModEl.textContent = document.lastModified || 'Unknown';
    }
});
