<<<<<<< HEAD
// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery Carousel
const galleryCarousel = document.querySelector('#gallery .carousel');
let imageIndex = 0;

function nextImage() {
    imageIndex = (imageIndex + 1) % galleryCarousel.children.length;
    updateCarousel();
}

function prevImage() {
    imageIndex = (imageIndex - 1 + galleryCarousel.children.length) % galleryCarousel.children.length;
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -imageIndex * 100;
    galleryCarousel.style.transform = `translateX(${translateValue}%)`;
}

// Set up interval for
=======
// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery Carousel
const galleryCarousel = document.querySelector('#gallery .carousel');
let imageIndex = 0;

function nextImage() {
    imageIndex = (imageIndex + 1) % galleryCarousel.children.length;
    updateCarousel();
}

function prevImage() {
    imageIndex = (imageIndex - 1 + galleryCarousel.children.length) % galleryCarousel.children.length;
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -imageIndex * 100;
    galleryCarousel.style.transform = `translateX(${translateValue}%)`;
}

// Set up interval for
>>>>>>> 384228e6e3336da843d4b7e30be7dcec3f992eb9
