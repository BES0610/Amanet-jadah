// navbar
function loadNavbar() {
    fetch('/ShareCom/NavBar/NavBar.html') 
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    
    //   append fullstope
    let li = document.getElementById("Home");
    let aTag = li.querySelector("a");

    let newDiv = document.createElement("span");
    newDiv.className = "fullstope";
    aTag.style.fontFamily = "HelveticaBold"
    aTag.style.position = "absolute"
    aTag.style.top = "-18px"
    li.appendChild(newDiv);
    
      // Create and append the script element
      const script = document.createElement('script');
      script.src = '/ShareJS/NavBar/script.js'; // Adjust the path accordingly
      document.body.appendChild(script);
    });
}

// Media
function loadMedia() {
    fetch('/ShareCom/Media/Media.html') 
    .then(response => response.text())
    .then(data => {
        document.getElementById('Media').innerHTML = data;
    });
}




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
