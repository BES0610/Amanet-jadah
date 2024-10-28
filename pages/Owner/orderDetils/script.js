

function enableButton() {
        const button = document.getElementById('serviceButton');
        button.disabled = false; // Enable the button when the radio is selected
        
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
        // JavaScript to handle file input and size display
        function displayFileSize(input, sizeElementId) {
            const file = input.files[0];
            const sizeElement = document.getElementById(sizeElementId);
            if (file) {
                const size = (file.size / 1024).toFixed(2); // Convert to KB
                sizeElement.textContent = `حجم الملف: ${size} كيلوبايت`;
            } else {
                sizeElement.textContent = ''; // Clear if no file is selected
            }
        }
    let map;
    let marker;

    function initMap() {
        const defaultLocation = { lat: 24.7136, lng: 46.6753 }; // Default to Riyadh, Saudi Arabia
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: defaultLocation,
        });

        marker = new google.maps.Marker({
            position: defaultLocation,
            map: map,
            title: "Selected Location",
        });

        // Set up a click event listener on the map
        map.addListener("click", (event) => {
            const lat = event.latLng.lat();
            const lng = event.latLng.lng();
            setLocation(lat, lng);
        });
    }

    function setLocation(lat, lng) {
        document.getElementById("latitude").value = lat;
        document.getElementById("longitude").value = lng;

        // Move the marker to the new location
        marker.setPosition({ lat, lng });
    }

    function openMap() {
        const mapModal = document.getElementById('mapModal');
        mapModal.style.display = 'block'; // Show the modal
        initMap(); // Initialize the map
    }

    // Close the modal when clicked outside of the map
    window.onclick = function(event) {
        const mapModal = document.getElementById('mapModal');
        if (event.target === mapModal) {
            mapModal.style.display = 'none';
        }
    }

    
// Add click event listeners to each drag-and-drop area
document.querySelectorAll('.drag-and-drop').forEach(dragDrop => {
    const uploadText = dragDrop.querySelector('div[id^="uploadText-"]');

    uploadText.addEventListener('click', () => {
        uploadText.style.display = 'none'; // Hide the text
        const fileInput = dragDrop.querySelector('input[type="file"]');
        dragDrop.style.flexDirection = 'row';
        dragDrop.style.justifyContent = 'start';
        fileInput.click();
    });
});

// Handle file upload
function handleFileUpload(input) {
    const fileIndex = input.id.split('-')[2]; // Extract the index from the input element's ID
    const fileSizeElement = document.getElementById(`file-size-${fileIndex}`);
    const progressBar = document.getElementById(`progress-bar-${fileIndex}`);
    const progressContainer = document.getElementById(`progress-container-${fileIndex}`);
    const uploadPercentage = document.getElementById(`upload-percentage-${fileIndex}`);
    const fileNameElement = document.getElementById(`file-name-${fileIndex}`);
    const uploadIcon = document.getElementById(`upload-icon-${fileIndex}`);
    const uploadText = document.getElementById(`uploadText-${fileIndex}`);
    const dragAndDrop = document.getElementsByClassName(`drag-and-drop`);
    const file = input.files[0];

    if (file) {
        // Hide the upload text
        uploadText.style.display = 'none'; 

        // Update file name and size display
        fileNameElement.textContent = `${file.name}`;
        const fileSizeInKB = (file.size / 1024).toFixed(2); // File size in KB
        fileSizeElement.textContent = `${fileSizeInKB} KB / 30 MB`;

        // Change icon for the uploaded file
        uploadIcon.src = '/assest/Icons/OrderDetils/Icon.jpg'; // New icon for uploaded file
        uploadIcon.style.display = 'block'; // Ensure the icon is displayed
        uploadIcon.style.width = '50px';
        uploadIcon.style.height = '70px';
        uploadIcon.style.marginLeft = '10px';

        // Show progress container
        progressContainer.style.display = 'block';

        // Simulate upload progress
        let uploadProgress = 0;
        const uploadInterval = setInterval(() => {
            uploadProgress += 10; // Simulate progress increase
            progressBar.style.width = `${uploadProgress}%`;
            uploadPercentage.textContent = `${uploadProgress}%`; // Add % symbol

            if (uploadProgress >= 100) {
                clearInterval(uploadInterval);

                // Hide loading indicator after upload is complete
                setTimeout(() => {
                    progressBar.style.backgroundColor = '#2F7CBE'; // Change color to indicate success
                }, 500); // Hide shortly after upload completes
            }
        }, 500); // Simulate every 500ms
    } else {
        // Reset state if no file selected
        fileNameElement.textContent = '';
        uploadIcon.src =  '/assest/Icons/OrderDetils/Icon.jpg'; // Reset icon if no file
        progressContainer.style.display = 'none';
        uploadText.style.display = 'block'; // Show the upload text again if no file selected
    }
}

