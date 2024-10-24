document.addEventListener("DOMContentLoaded", function() {
    const imagesSlider = document.querySelector('.ImagesSlider');
    const slides = imagesSlider.children; // Get all slides
    const paginationButtons = document.querySelectorAll('.pagination-button');
    let currentIndex = 0;

    function updateSlider() {
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'; // Hide all slides
        }
        
        // Show the current slide
        slides[currentIndex].style.display = 'block'; // Show current slide

        // Update active button
        paginationButtons.forEach(button => button.classList.remove('active'));
        paginationButtons[currentIndex].classList.add('active');
    }

    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateSlider();
        });
    });

    // Show the initial slide
    updateSlider();

    // Optionally, add automatic sliding
    setInterval(() => {
        currentIndex = (currentIndex + 1) % paginationButtons.length;
        updateSlider();
    }, 3000); // Change slide every 3 seconds
});
