

  // append the body for taple 1
  const bodyDivData = document.getElementById('bodyDiv1');
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
        icon: '../../../assest/Icons/Owner/presentSale/Frame 53.png'
    };
});

// Function to get random status
function getRandomStatus() {
    const statuses = ["مرفق", "غير مرفق", "مرفوض", "تجاوز المدة", "مقبول"];
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
            <div class="red" style="flex-grow: 0;padding: 12px">1</div>
            <div><img style="cursor: pointer;" id="openTabIcon-${i}" src="${item.icon}" alt="icon" /></div>
            <div class="${getStatusClass(item.status)}">${item.status}</div>
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
        case 'مرفق':
            return 'green';
        case 'غير مرفق':
            return 'yellow';
        case 'مرفوض':
            return 'red';
        case 'تجاوز المدة':
            return 'gray';
        case 'مقبول':
            return 'blue';
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
    let newTab = document.getElementById('newTab')


    tab.style.display = 'block'; // Show the tab

    // Close tab functionality
    document.getElementById('closeTab').addEventListener('click', () => {
        tab.style.display = 'none'; // Hide the tab
    });
    document.getElementById('closeTab2').addEventListener('click', () => {
        newTab.style.display = 'none'; // Hide the tab
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


// toggle btn 

// Get all buttons with the class 'toggle-button'
const buttons = document.querySelectorAll('.toggle-button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'activbutton' class from all buttons
        buttons.forEach(btn => btn.classList.remove('activbutton'));
        
        // Add 'activbutton' class to the clicked button
        button.classList.add('activbutton');
    });
});


    // toggle table 

// Get button elements
const consultantButton = document.getElementById('consultantButton');
const contractorButton = document.getElementById('contractorButton');

// Get table elements
const consultantTable = document.getElementById('consultantTable');
const contractorTable = document.getElementById('contractorTable');

// Event listener for the consultant button
consultantButton.addEventListener('click', () => {
    consultantTable.style.display = 'block'; // Show consultant table
    contractorTable.style.display = 'none'; // Hide contractor table
    activateButton(consultantButton); // Activate consultant button
    deactivateButton(contractorButton); // Deactivate contractor button
});

// Event listener for the contractor button
contractorButton.addEventListener('click', () => {
    consultantTable.style.display = 'none'; // Hide consultant table
    contractorTable.style.display = 'block'; // Show contractor table
    activateButton(contractorButton); // Activate contractor button
    deactivateButton(consultantButton); // Deactivate consultant button
});

// Function to activate a button
function activateButton(button) {
    button.classList.add('activbutton');
}

// Function to deactivate a button
function deactivateButton(button) {
    button.classList.remove('activbutton');
}

// Initial state: show consultant table and activate its button
consultantTable.style.display = 'block';
contractorTable.style.display = 'none';
activateButton(consultantButton);




function selectOnlyOne(checkbox) {
    const checkboxes = document.getElementsByName('agreement');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}

    // Add event listener for "ارسال" button
    document.getElementById("sendButton").addEventListener("click", function() {
        // Hide the current tab
        document.getElementById("tab").style.display = "none";

        // Show the new tab
        document.getElementById("newTab").style.display = "block"; // Make sure to have the newTab defined in your HTML
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