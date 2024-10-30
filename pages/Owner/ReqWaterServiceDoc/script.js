
function enableButton() {
        const button = document.getElementById('serviceButton');
        button.disabled = !button.disabled;
    }

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