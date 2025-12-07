export async function fetchJSON(path) {
    try {
        const response = await fetch(path);
        return await response.json();
    } catch (err) {
        console.error("JSON fetch error:", err);
        throw err;
    }
}
