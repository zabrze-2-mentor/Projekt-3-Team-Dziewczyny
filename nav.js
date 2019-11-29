const arr = ["lip_liner", "lipstick", "foundation", "eyeliner", "eyeshadow", "blush", "bronzer", "mascara",
    "eyebrow", "nail_polish"
];
const podKategorie = [
    ["pencil", "Inne"],
    ["lipstick", "lip_gloss", "Inne", "liquid", "lip_stain"],
    ["liquid", "powder", "concealer", "highlighter", "Inne", "bb_cc", "contour", "cream", "mineral"],
    ["liquid", "gel", "pencil", "cream", "Inne"],
    ["palette", "cream", "Inne", "pencil"],
    ["powder", "cream", "Inne"],
    ["powder", "Inne"],
    ["Inne"],
    ["pencil", "Inne"],
    ["Inne"]
]

var text = "";
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/_/g, ' ');

}

function display() {
    let i=0;
    arr.forEach(function (item) {
        let divDropdown = document.createElement("div");
        divDropdown.classList.add("dropdown");
        document.getElementById('kat').appendChild(divDropdown);
        let button = document.createElement("button")
        button.classList.add("btn");
        button.classList.add("btn-secondary");
        button.classList.add("dropdown-toggle");
        divDropdown.appendChild(button);
        // button.setAttribute("class", "democlass");
        button.setAttribute("type", "button");
        button.setAttribute("data-toggle", "dropdown");
        button.setAttribute("aria-haspopup", "true");
        button.setAttribute("aria-expanded", "false");
        button.innerText=item;
        let divMenu = document.createElement("div");
        divMenu.classList.add("dropdown-menu");
        divMenu.style.textAlign="center";
        divMenu.setAttribute("aria-labelledby", "dropdownMenuButton");
        divDropdown.appendChild(divMenu)
        for(let j=0; j<podKategorie[i].length; j++){
            let aItem=document.createElement("a")
            aItem.setAttribute("href", "kategoria.html?cat="+item+"&subcat="+podKategorie[i][j]);
            aItem.classList.add("dropdown-item");
            aItem.innerText=podKategorie[i][j];
            divMenu.appendChild(aItem);

        }
        i++;
    });

    
}
display();