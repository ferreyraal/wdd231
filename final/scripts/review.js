const params = new URLSearchParams(window.location.search);
const resultSection = document.querySelector("#result");

if (params.has("first")) {
  resultSection.innerHTML = `
        <h2>Thank you for your review!</h2>
        <p><strong>Name:</strong> ${params.get("first")} ${params.get("last")}</p>
        <p><strong>Email:</strong> ${params.get("email")}</p>
        <p><strong>Review Type:</strong> ${params.get("type") === "region" ? "Region" : "Product"}</p>
        <p><strong>Item Reviewed:</strong> ${params.get("rev_item")}</p>
        <p><strong>Your Review:</strong></p>
        <p>${params.get("review")}</p>
    `;

  resultSection.classList.remove("hidden");
}
