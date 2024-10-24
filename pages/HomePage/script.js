document.addEventListener("DOMContentLoaded", function() {
    const imagesSlider = document.querySelector('.ImagesSlider');
    const paginationButtons = document.querySelectorAll('.pagination-button');
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100; // Change this based on your layout
        imagesSlider.style.transform = `translateX(${offset}%)`;

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

    // Optionally, add automatic sliding
    setInterval(() => {
        currentIndex = (currentIndex + 1) % paginationButtons.length;
        updateSlider();
    }, 3000); // Change slide every 3 seconds
});
