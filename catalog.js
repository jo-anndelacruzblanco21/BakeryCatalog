fetch('catalog.json') 
    .then(response => response.json())  
    .then(bakeryInventory => { 
        let bakeryDisplay = "";  
        for (const pastryProduct of bakeryInventory) {
            bakeryDisplay += `
                <div class="product-item">
                    <img src="${pastryProduct.look}" alt="${pastryProduct.name}" class="item-image">
                    <h3 class="bread-name">${pastryProduct.name}</h3>
                    <p class="product-price">&#8369;${pastryProduct.price}</p>
                    <button class="add-to-cart-button">Add to Tray</button>
                </div>
            `;
        }
        
        document.querySelector("#bakery-display").innerHTML = bakeryDisplay;
    })
