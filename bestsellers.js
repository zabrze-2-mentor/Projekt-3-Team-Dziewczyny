const endpoint1 = 'https://makeup-api.herokuapp.com/api/v1/products.json'
const losowe = document.getElementById('losowe')

fetch(endpoint1)
.then((data) => data.json())
.then(data => {
        for(let i=1; i<7; i++) {
        
        ranNum = Math.floor((Math.random() * data.length-1) + 1);
        let product = data[ranNum];
        const card = document.createElement("div");
        
        const name = document.createElement("h4");
        name.textContent = product.name;
        
        const info = document.createElement("div");

        const img = document.createElement("img");
        img.setAttribute("src", product.image_link);

        const category = document.createElement("h6");
        category.textContent = product.product_type;

        const price = document.createElement("h5");
        let randomPrice = Math.floor((Math.random() * 30) + 10);
        let cost = product.price==null || product.price=='0.0'? randomPrice: product.price;
        let price_sign = product.price_sign==null ? '$': product.price_sign;
        price.textContent = cost + price_sign;

        const button = document.createElement("button");
        button.setAttribute("class", "button");
        button.textContent = "więcej";
        button.addEventListener("click",(e) => {
            window.location.href = "produkt.html?id=" + product.id 
        });
    losowe.appendChild(card)
    card.appendChild(name);
    card.appendChild(info);
    info.appendChild(img);
    info.appendChild(category);
    info.appendChild(price);
    info.appendChild(button);
    }
});