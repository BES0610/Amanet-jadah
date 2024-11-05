setTimeout(() => {
    // append header 

let header = document.getElementsByClassName("Header")[0]; // Select the first element with the class "Header"

// Create <th> elements and set text for each one
let th1 = document.createElement("th");
th1.textContent = "رقم المعاملة";

let th2 = document.createElement("th");
th2.textContent = "المشروع";

let th3 = document.createElement("th");
th3.textContent = " المالك";

let th4 = document.createElement("th");
th4.textContent = "الاستشاري";

let th5 = document.createElement("th");
th5.textContent = "المقاول";

let th6 = document.createElement("th");
th6.textContent = "طول الخط البديل";
// th6.style.flex = "2"

let th7 = document.createElement("th");
th7.textContent = "الموقع";

let th8 = document.createElement("th");
th8.textContent = "مرفقات";

let th9 = document.createElement("th");
th9.textContent = "الحالة";

let th10 = document.createElement("th");
th10.textContent = "التقرير";



// Append each <th> element to the header
header.appendChild(th1);
header.appendChild(th2);
header.appendChild(th3);
header.appendChild(th4);
header.appendChild(th5);
header.appendChild(th6);
header.appendChild(th7);
header.appendChild(th8);
header.appendChild(th9);
header.appendChild(th10);

// append body 
const bodyDivData = document.getElementById('bodyDiv');
const paginationDiv = document.getElementById('pagination');

const itemsPerPage = 12; // Number of items per page
const totalItems = 100; // Total number of items
const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
let currentPage = 1; // Initialize current page

// Sample data array with 100 objects
const data = Array.from({ length: totalItems }, (_, index) => {
return {
    number: `12340`,
    project: `مدينة الملك فهد`,
    owner: "حسن فايز", // Incrementing number for each row
    Consultiv: "حسن فايز", // Incrementing number for each row
    Contra: "حسن فايز", // Incrementing number for each row
    linenumber: `12340`,
    location: "جده ", // Incrementing number for each row
    arrow: " ./../../../assest/Icons/Honesty/arrowdown.png", // Incrementing number for each row
    status: getRandomStatus(),
    gear: '../../../assest/Icons/consultative/Gear.png'
};
});

// Function to get random status
function getRandomStatus() {
    const statuses = ["تسليم مشروع", " تحت التنفيذ"];
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
    const bodyDiv = document.createElement('tr');
    bodyDiv.className = 'body';

    // Populate the body div with content
    bodyDiv.innerHTML = `
        <td style="cursor: pointer;" id="forthopenTabIcon-${i}">${item.number}</td>
        <td>${item.project}</td>
        <td>${item.owner}</td>
        <td>${item.Consultiv}</td>
        <td>${item.Contra}</td>
        <td>${item.linenumber}</td>
        <td class="location" style="cursor: pointer;" id="thirdopenTabIcon-${i}"><img style="position: relative;top: 6px;"  src="../../../assest/Icons/Honesty/location.png" alt="icon" />${item.location}</td>
        <td><img style="cursor: pointer;" id="openTabIcon-${i}" src="${item.arrow}" alt="icon" /></td>
        <td class="statuss">${item.status}</td>
        <td><img style="cursor: pointer;" id="ScoopenTabIcon-${i}" src="${item.gear}" alt="icon" /></td>
    `;
    bodyDivData.appendChild(bodyDiv);

    // Attach event listener for opening the tab for the current item
    document.getElementById(`openTabIcon-${i}`).addEventListener('click', () => {
        openTab(item); // Open tab with the item details
    });
    document.getElementById(`ScoopenTabIcon-${i}`).addEventListener('click', () => {
        sixtab(item); // Open tab with the item details
    });
    document.getElementById(`thirdopenTabIcon-${i}`).addEventListener('click', () => {
        thirdopentab(item); // Open tab with the item details
    });
    document.getElementById(`forthopenTabIcon-${i}`).addEventListener('click', () => {
        fortheoptab(item); 
    });
}

createPagination(); // Update pagination controls
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


// Initial render
renderItems(1); // Render the first page


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


}, 100)


function enableButton() {
    const button = document.getElementById('serviceButton');
    button.disabled = !button.disabled;
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
        uploadIcon.src = "../../../assest/Icons/Owner/OrderDetils/Icon.jpg"; // New icon for uploaded file
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
        uploadIcon.src =  '../../../assest/Icons/Owner/OrderDetils/Icon.jpg'; // Reset icon if no file
        progressContainer.style.display = 'none';
        uploadText.style.display = 'block'; // Show the upload text again if no file selected
    }
}



function openTab(item) {
    const tab = document.getElementById('tab');
    const tabContent = document.querySelector('.tab-content');
    
    
    tab.style.display = 'block'; // Show the tab
    
    // Close tab functionality
    document.getElementById('closeTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    
    // Optional: Close the tab when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === tab) {
            tab.style.display = 'none'; // Hide the tab if clicked outside
        }
    });
    }
    function scoopenTab(item) {
    const tab = document.getElementById('scotab');
    const tabContent = document.querySelector('.tab-content');
    
    tab.style.display = 'block'; // Show the tab
    
    // Close tab functionality
    document.getElementById('ScocloseTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    
    // Optional: Close the tab when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === tab) {
            tab.style.display = 'none'; // Hide the tab if clicked outside
        }
    });
    }
    function thirdopentab(item) {
    const tab = document.getElementById('thirdtab');
    const tabContent = document.querySelector('.tab-content');
    
    
    tab.style.display = 'block'; // Show the tab
    
    // Close tab functionality
    document.getElementById('thirdloseTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    
    // Optional: Close the tab when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === tab) {
            tab.style.display = 'none'; // Hide the tab if clicked outside
        }
    });
    }
    function fortheoptab(item) {
    const tab = document.getElementById('forthtab');
    const tabContent = document.querySelector('.tab-content');
    
    
    tab.style.display = 'block'; // Show the tab
    
    // Close tab functionality
    document.getElementById('forthcloseTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    
    // Optional: Close the tab when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === tab) {
            tab.style.display = 'none'; // Hide the tab if clicked outside
        }
    });
    }
    
    function fiftheoptab(item) {
    const tab = document.getElementById('fifthtab');
    const tabContent = document.querySelector('.tab-content');
    
    
    tab.style.display = 'block'; // Show the tab
    
    // Close tab functionality
    document.getElementById('fifthcloseTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    
    // Optional: Close the tab when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === tab) {
            tab.style.display = 'none'; // Hide the tab if clicked outside
        }
    });
    }
    function fiftheoptab(item) {
    const tab = document.getElementById('fifthtab');
    const tabContent = document.querySelector('.tab-content');
    
    
    tab.style.display = 'block'; // Show the tab
    
    // Close tab functionality
    document.getElementById('fifthcloseTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    
    // Optional: Close the tab when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === tab) {
            tab.style.display = 'none'; // Hide the tab if clicked outside
        }
    });
    }
    function sixtab(item) {
    const tab = document.getElementById('sixtab');
    const tabContent = document.querySelector('.tab-content');
    
    
    tab.style.display = 'block'; // Show the tab
    
    // Close tab functionality
    document.getElementById('sixcloseTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    
    // Optional: Close the tab when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === tab) {
            tab.style.display = 'none'; // Hide the tab if clicked outside
        }
    });
    }
    