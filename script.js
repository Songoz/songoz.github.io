
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".work-slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    // Stop if this page does not contain a carousel.
    if (!slides.length || !next || !prev) return;

    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    next.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prev.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    showSlide(current);
});
