async function fetchProduct(id = 0) {
    const endpoint =
        "https://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";

    const section = document.getElementById("product");
    let response = await fetch(endpoint);
    response = await response.json();
    section.getElementsByTagName("h1")[0].innerText = response.name;
    section.getElementsByTagName('img')[0].src = response.image_link;
    section.getElementsByClassName('description')[0].innerText = response.description;
    document.getElementById("a-buy-now").href = response.product_link;
    response.product_colors.forEach(element => {
        let productColor = document.createElement("div");
        let productColorContainer = document.createElement("div");

        productColor.setAttribute("data-toggle", "tooltip");
        productColor.setAttribute("data-placement", "top");
        productColor.setAttribute("title", element.colour_name);


        productColorContainer.classList.add("product-colors-container");
        productColor.classList.add("product-colors");
        productColor.style.backgroundColor = element.hex_value;
        productColorContainer.appendChild(productColor);
        section.getElementsByClassName("colors-container")[0].appendChild(productColorContainer);

    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    document.getElementById('product-category').innerText = (response.category || 'brak');
    document.getElementById('product-brand').innerText = (response.brand || 'brak');
    document.getElementById('product-type').innerText = (response.product_type || 'brak');
    document.getElementById('product-price').innerText = (response.price || 'brak');
    document.getElementById('product-experts-rating').innerText = (response.rating || 'brak');



}
let url_string = window.location;
var url = new URL(url_string);
var c = url.searchParams.get("id");

fetchProduct(c);
//todo:wycentrować zdjęcie, w kolorach mają wyskakiwać nazwy kolorów po najechaniu,
//(username || 'guest')