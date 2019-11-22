const endpoint = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
//const endpoint = 'https://makeup-api.herokuapp.com/api/v1/products.json'

const section = document.getElementById('produkt');
let i = 0; 
fetch(endpoint)
    .then((data) => data.json())
    .then(data => {
        data.forEach(product => {
			/*
			Dodano:
			 - Po 20 iteracjach wychodź z pętli 
			 Zmieniono:
			 - Link z mniejszą ilością produktów
			Piotrek 
			*/
			i++; 
			if(i>20){
				return;
			}
			
            const card = document.createElement("div")
            
            const name = document.createElement("h4");
            name.textContent = product.name;
            
            const info = document.createElement("div");

            const img = document.createElement("img");
            img.setAttribute("src", product.image_link);

            const category = document.createElement("h6");
            category.textContent = product.product_type;

            const price = document.createElement("h5");
            price.textContent = product.price + product.price_sign;

            const button = document.createElement("button");
            button.setAttribute("class", "button");
            button.textContent = "więcej";
            
            section.appendChild(card)
            card.appendChild(name);
            card.appendChild(info);
            info.appendChild(img);
            info.appendChild(category);
            info.appendChild(price);
            info.appendChild(button);
        });
        
    })