// navbar
function loadNavbar() {
    fetch('/ShareCom/NavBar/NavBar.html') 
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
        //   append fullstope
    let li = document.getElementById("Owner");
    let span = li.querySelector("span");
    let icon = li.querySelector("icon");
    
    let newDiv = document.createElement("span");
    newDiv.className = "fullstope";
    span.style.fontFamily = "HelveticaBold";
    span.style.position = "absolute";
    span.style.top = "-26px";
    
    icon.style.position = "absolute";
    icon.style.left = "18px";
    icon.style.top = "-18px";

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

document.addEventListener('DOMContentLoaded', function() {
    const specificRadio = document.getElementById('specific');
    const conditionalSelect = document.querySelector('.conditional-select');

    specificRadio.addEventListener('change', function() {
        conditionalSelect.style.display = specificRadio.checked ? 'block' : 'none';
    });

    const allRadio = document.getElementById('all');
    allRadio.addEventListener('change', function() {
        conditionalSelect.style.display = 'none';
    });
});
