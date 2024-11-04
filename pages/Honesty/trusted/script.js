
const bodyDivData = document.getElementById('bodyDiv');
const paginationDiv = document.getElementById('pagination');

const itemsPerPage = 12; // Number of items per page
const totalItems = 100; // Total number of items
const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
let currentPage = 1; // Initialize current page

// Sample data array with 100 objects
const data = Array.from({ length: totalItems }, (_, index) => {
    return {
        date: `21/05/2024`,
        duration: '7 ايام',
        number: (12340 + index), // Incrementing number for each row
        name: 'حسن فايز',
        project: 'مشروع التربة',
        status: getRandomStatus(), // Random status
        icon: './../../../assest/Icons/consultative/Gear.png'
    };
});

// Function to get random status
function getRandomStatus() {
    const statuses = ["معتمد", "غير معتمد"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

// Function to render items based on the current page
function renderItems(page) {
    bodyDivData.innerHTML = ''; // Clear existing items
    currentPage = page; // Update current page

    const startIndex = (page - 1) * itemsPerPage; // Calculate starting index
    const endIndex = Math.min(startIndex + itemsPerPage, data.length); // Calculate ending index

    for (let i = startIndex; i < endIndex; i++) {
        const item = data[i];
        const bodyDiv = document.createElement('div');
        bodyDiv.className = 'body';

        // Populate the body div with content
        bodyDiv.innerHTML = `
            <div>${item.date}</div>
            <div>${item.duration}</div>
            <div>${item.number}</div>
            <div>${item.name}</div>
            <div>${item.project}</div>
            <div class="${getStatusClass(item.status)}">${item.status}</div>
            <div><img style="cursor: pointer;" id="openTabIcon-${i}" src="${item.icon}" alt="icon" /></div>
        `;
        bodyDivData.appendChild(bodyDiv);

        // Attach event listener for opening the tab for the current item
        document.getElementById(`openTabIcon-${i}`).addEventListener('click', () => {
            openTab(item); // Open tab with the item details
        });
    }

    createPagination(); // Update pagination controls
}

// Function to get class based on status
function getStatusClass(status) {
    switch (status) {
        case 'معتمد':
            return 'green';
        case 'غير معتمد':
            return 'red';
        default:
            return ''; // Fallback class if needed
    }
}

// Function to create pagination buttons
function createPagination() {
    paginationDiv.innerHTML = ''; // Clear existing pagination

    const pagesToShow = 3; // Show 3 pages at a time
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (startPage > 1) {
        const firstButton = createButton(1);
        paginationDiv.appendChild(firstButton);
        if (startPage > 2) {
            paginationDiv.appendChild(createEllipses());
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationDiv.appendChild(createButton(i));
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationDiv.appendChild(createEllipses());
        }
        paginationDiv.appendChild(createButton(totalPages));
    }

    // Add select input for jumping to pages
    const select = document.createElement('select');
    select.className = 'page-select';
    for (let i = 1; i <= totalPages; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i}`;
        select.appendChild(option);
    }
    select.value = currentPage; // Set the current page as selected
    select.onchange = (event) => {
        const selectedPage = parseInt(event.target.value);
        renderItems(selectedPage); // Render items for selected page
    };

    paginationDiv.appendChild(select);
}

// Function to create pagination button
function createButton(page) {
    const button = document.createElement('div');
    button.className = 'pagination-button';
    button.innerText = page;
    button.onclick = () => renderItems(page);
    if (page === currentPage) {
        button.classList.add('active');
    }
    return button;
}

// Function to create ellipses
function createEllipses() {
    const ellipses = document.createElement('div');
    ellipses.innerText = '...';
    return ellipses;
}

// Function to open the tab and display item details
function openTab(item) {
    const tab = document.getElementById('tab');
    const tabContent = document.querySelector('.tab-content');


    tab.style.display = 'block'; // Show the tab

    // Close tab functionality
    document.getElementById('closeTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    document.getElementById('save').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });

    // Optional: Close the tab when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === tab) {
            tab.style.display = 'none'; // Hide the tab if clicked outside
        }
    });
}

// Initial render
renderItems(1); // Render the first page


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
        uploadIcon.src = '../../../assest/Icons/Owner/OrderDetils/Icon.jpg'; // New icon for uploaded file
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
        uploadIcon.src =  '../../..//assest/Icons/Owner/OrderDetils/Icon.jpg'; // Reset icon if no file
        progressContainer.style.display = 'none';
        uploadText.style.display = 'block'; // Show the upload text again if no file selected
    }
}

function selectOnlyOne(checkbox) {
    const checkboxes = document.getElementsByName('agreement');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}

setTimeout(() => {
    let li = document.getElementById("consultative");
    let span = li.querySelector("span");
    let icon = li.querySelector("icon");
    
    let newDiv = document.createElement("span");
    newDiv.className = "fullstope";
    span.style.fontFamily = "HelveticaBold";
    span.style.position = "absolute";
    span.style.top = "-26px";
    
    icon.style.position = "absolute";
    icon.style.left = "-7px";
    icon.style.top = "-18px";

    li.appendChild(newDiv);

}, 1)