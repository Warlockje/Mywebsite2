document.addEventListener("DOMContentLoaded", function() {
    const productenContainer = document.getElementById("producten");
    const winkelwagenItems = document.getElementById("aantalItems");

    // Simulatie van 30 producten
    for (let i = 1; i <= 30; i++) {
        const product = document.createElement("div");
        product.classList.add("product");
        product.innerHTML = `<img src="product${i}.jpg" alt="Product ${i}">`;
        productenContainer.appendChild(product);
    }

    // Winkelwagenfunctionaliteit
    let aantalProducten = 0;

    productenContainer.addEventListener("click", function(event) {
        if (event.target.tagName === "IMG") {
            aantalProducten++;
            winkelwagenItems.textContent = aantalProducten;
        }
    });
});
