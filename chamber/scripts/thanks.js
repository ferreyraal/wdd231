document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const results = document.getElementById("results");
    if (!results) return; 

    results.innerHTML = `
        <h2>Submitted Information</h2>

        <p><strong>First Name:</strong> ${params.get("first") || "—"}</p>
        <p><strong>Last Name:</strong> ${params.get("last") || "—"}</p>
        <p><strong>Email:</strong> ${params.get("email") || "—"}</p>
        <p><strong>Mobile Number:</strong> ${params.get("phone") || "—"}</p>
        <p><strong>Organization:</strong> ${params.get("organization") || "—"}</p>
        <p><strong>Submitted At:</strong> ${params.get("timestamp") || "—"}</p>
    `;
});
