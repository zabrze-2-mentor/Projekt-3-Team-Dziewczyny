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
        productColor.classList.add("product-colors");
        productColor.style.backgroundColor = element.hex_value;
        section.getElementsByClassName("colors-container")[0].appendChild(productColor);

    });
    document.getElementById('product-category').innerText = (response.category || 'brak');
    document.getElementById('product-brand').innerText = (response.brand || 'brak');
    document.getElementById('product-type').innerText = (response.product_type || 'brak');
    document.getElementById('product-price').innerText = (response.price || 'brak');
    document.getElementById('product-experts-rating').innerText = (response.rating || 'brak');



}
fetchProduct("70");
//todo:wycentrować zdjęcie, w kolorach mają wyskakiwać nazwy kolorów po najechaniu,
//(username || 'guest')