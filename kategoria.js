const produktyKategorii = document.getElementById('produktyKategorii');

var url_string = window.location.href;
var url = new URL(url_string);
var cat = url.searchParams.get("cat");
var subcat = url.searchParams.get("subcat");

const linkCat="https://makeup-api.herokuapp.com/api/v1/products.json?category="+subcat+"&product_type="+cat;
console.log(linkCat)
fetch(linkCat)
    .then((data) => data.json())
    .then(data => {
        data.forEach(product => {
			
					// console.log("kategoria")
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
            button.addEventListener("click",(e) => {
                window.location.href = "produkt.html?id=" + product.id
            })

            produktyKategorii.appendChild(card)
            card.appendChild(name);
            card.appendChild(info);
            info.appendChild(img);
            info.appendChild(category);
            info.appendChild(price);
            info.appendChild(button);
        });
        

    });