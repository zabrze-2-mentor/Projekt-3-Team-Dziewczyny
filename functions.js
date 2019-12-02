//Slider
let currentSlide = 1;
let play = null;

function showSlide(n) {
    currentSlide = n;
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#slide' + n).classList.add('show');
    document.querySelector('.selected').classList.remove('selected');
    document.querySelector('#pin'+n).classList.add('selected');
};


function showNextSlide() {
    const nextSlide = currentSlide < 3? currentSlide +1: 1;
    showSlide(nextSlide);
};


function showPrevSlide() {
    const prevSlide = currentSlide >1? currentSlide - 1: 3;
    showSlide(prevSlide);  
};

function playSlideShow() {
    play = setInterval(showNextSlide, 3500);
};

function stopShowSlide() {
    clearInterval(play);
};

if (document.querySelector('.slider')) {
    for (let i=1; i<=3; i++) {
        document.querySelector('#pin'+i).addEventListener('click', () => showSlide(i));
    };
    document.querySelector('#next').addEventListener('click', showNextSlide);
    document.querySelector('.slides').addEventListener('mouseover', stopShowSlide);
    document.querySelector('.slides').addEventListener('mouseout', playSlideShow);
    document.querySelector('#prev').addEventListener('click', showPrevSlide);
    playSlideShow()
};


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
