// script.js
const imageSlider = document.querySelector('.image-slider');
const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const dotsContainer = document.querySelector('.slider-dots');

let counter = 0;
const slideWidth = sliderItems[0].clientWidth;

function goToSlide(index) {
    imageSlider.style.transform = `translateX(${-slideWidth * index}px)`;
    updateDots(index);
}

function nextSlide() {
    counter = (counter + 1) % sliderItems.length;
    goToSlide(counter);
}

function prevSlide() {
    counter = (counter - 1 + sliderItems.length) % sliderItems.length;
    goToSlide(counter);
}

function createDots() {
    sliderItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    updateDots(0);
}

function updateDots(index) {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

createDots();
goToSlide(0); // Initial slide

setInterval(nextSlide, 5000) // auto slide every 5 seconds