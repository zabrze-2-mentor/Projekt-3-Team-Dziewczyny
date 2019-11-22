const endpoint = 'https://makeup-api.herokuapp.com/api/v1/products.json'

const section = document.getElementById('produkt');

fetch(endpoint)
    .then((data) => data.json())
    .then(data => {
        data.forEach(product => {
            const card = document.createElement("div")
            
            const name = document.createElement("h4");
            name.textContent = product.name;
            
            const info = document.createElement("div");

            const img = document.createElement("img");
            img.setAttribute("src", "image_link");

            const kategoria = document.createElement("h6");
            kategoria.textContent = product.product_type;

            const cena = document.createElement("h5");
            cena.textContent = product.price + product.price_sign;

            const button = document.createElement("button");
            button.setAttribute("class", "button");
            button.textContent = "więcej";
            
            
            section.appendChild(card)
            card.appendChild(name);
            card.appendChild(info);
            info.appendChild(img);
            info.appendChild(kategoria);
            info.appendChild(cena);
            info.appendChild(button);
        });
        
    })