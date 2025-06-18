const sliderImages = document.querySelectorAll('.slider-image');
let currentImage = 0;

function showImage(index) {
    sliderImages.forEach(img => img.classList.remove('active'));
    sliderImages[index].classList.add('active');
}

function nextSlide() {
    currentImage = (currentImage + 1) % sliderImages.length;
    showImage(currentImage);
}

setInterval(nextSlide, 10000); // Change image every 5 seconds

const sliderContainer = document.querySelector('.video-slider-container');
const videos = document.querySelectorAll('.slider-video');
let currentVideo = 0;
let intervalId;

function showVideo(index) {
  videos.forEach(video => video.classList.remove('active'));
  videos[index].classList.add('active');
}

function nextVideo() {
  currentVideo = (currentVideo + 1) % videos.length;
  showVideo(currentVideo);
}

function startSlider() {
  intervalId = setInterval(nextVideo, 3000);
}

function stopSlider() {
  clearInterval(intervalId);
}

startSlider();

sliderContainer.addEventListener('mouseover', stopSlider);
sliderContainer.addEventListener('mouseout', startSlider);

const container = document.querySelector('.s_container');
let currentPosition = 0; // Keep track of current position

setInterval(() => {
    currentPosition -= 100; // Move 100% to the left (adjust if images have different widths)
    container.style.transform = `translateX(${currentPosition}%)`;

    // Reset position when reaching the end
    if (currentPosition <= -(container.children.length - 1) * 100) {
        currentPosition = 0;
    }
}, 3000); // Slide every 3 seconds

// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // You can add your form submission logic here, such as sending data to a server
    
    alert('Form submitted successfully!'); // Show a success message
});