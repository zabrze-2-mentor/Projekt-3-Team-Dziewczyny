const arr = ["lip_liner", "lipstick", "foundation", "eyeliner", "eyeshadow", "blush", "bronzer", "mascara",
"eyebrow", "nail_polish"];
var text = "";
for (let i=0; i<arr.length; i++){
    arr[i]=arr[i].replace(/_/g, ' ');
    
}
function Display(){
    arr.forEach(function (item) {
        text+=`<a href='#'> ${item} </a>`
        });
    
    document.getElementById('kat').innerHTML=text
}
Display();