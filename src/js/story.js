// const storyContainer = document.getElementById('story-container');
// const storyTexts = [
//     { title: 'S1', text: 'Lorem' },
//     { title: 'S2', text: 'fe' },
//     { title: 'S3', text: 'fe' },
//     { title: 'S4', text: 'fe' },
//     { title: 'S5', text: 'fe' }
// ];

let currentIndex = 1;
showSlides(currentIndex);

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) {
        currentIndex = 1;
    }
    if (n < 1) {
        currentIndex = slides.length;
    }
    
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentIndex - 1].style.display = 'block';
    dots[currentIndex - 1].classList.add('active');
}

function currentSlide(n) {
    showSlides(currentIndex = n);
}

document.querySelector('.slider-btn.prev').addEventListener('click', () => {
    showSlides(currentIndex -= 1);
});

document.querySelector('.slider-btn.next').addEventListener('click', () => {
    showSlides(currentIndex += 1);
});