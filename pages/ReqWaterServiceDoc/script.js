    function enableButton() {
        const button = document.getElementById('serviceButton');
        button.disabled = false; // Enable the button when the radio is selected
        
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
