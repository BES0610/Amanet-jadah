

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

setTimeout(() => {
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

}, 1)