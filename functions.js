//Slider


//Opinie
let rateNum = Math.floor((Math.random() * 5)+1);

function selectStars(n) {
    for(let i=1; i<=n;i++) {document.querySelector('#rate'+ i).querySelector('.fas').classList.add('rate')}
};


function displayOverlap(n) {
    document.querySelector('.on').classList.remove('on');
    document.querySelector('.btn-overlap'+ n).classList.add('on');
    document.querySelector('.select').classList.remove('select');
    document.querySelector('.overlap'+n).classList.add('select');
};

if (document.querySelector('.raiting')) {
    selectStars(rateNum);
    document.querySelector('#btn-rate').addEventListener('click', () => displayOverlap(2));
}

if(document.querySelector('.overlap')) {
    for (let i=1; i<=2; i++) {
        document.querySelector('.btn-overlap'+i).addEventListener('click', () => displayOverlap(i));
    };
};

if(document.querySelector('.opinions')) {
    document.querySelector('.submit').addEventListener('click', (event) => event.preventDefault());
}
