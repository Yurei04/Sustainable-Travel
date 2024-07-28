//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


document.addEventListener('DOMContentLoaded', () => {
    const modals = {
        readMore1: document.getElementById('modal1'),
        readMore2: document.getElementById('modal2'),
        readMore3: document.getElementById('modal3'),
    };

    const closeButtons = {
        close1: document.getElementById('close1'),
        close2: document.getElementById('close2'),
        close3: document.getElementById('close3'),
    };

    Object.keys(modals).forEach(key => {
        document.getElementById(key).addEventListener('click', () => {
            modals[key].style.display = 'block';
        });
    });

    Object.keys(closeButtons).forEach(key => {
        closeButtons[key].addEventListener('click', () => {
            modals[key.replace('close', 'readMore')].style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        Object.keys(modals).forEach(key => {
            if (event.target == modals[key]) {
                modals[key].style.display = 'none';
            }
        });
    });
});


function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    let score = 0;
    const totalQuestions = 5;
    const answers = {
        q1: 'c',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'c'
    };

    for (let question in answers) {
        const userAnswer = quizForm.elements[question].value;
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}`;
}


document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slides.fade');
    let slide_index = 0;

    function show_slides() {
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });

        slide_index++;
        if (slide_index >= slides.length) {
            slide_index = 0;
        }

        slides[slide_index].classList.add('active');
    }
    show_slides();
    setInterval(show_slides, 5000); 
});

window.addEventListener("scroll", (e)=> {
    document.querySelector(".carousel").style.opacity = `${(-window.scrollY + 500) * .004}`
});