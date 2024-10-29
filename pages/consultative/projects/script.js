setTimeout(() => {
    // append header 

let header = document.getElementsByClassName("Header")[0]; // Select the first element with the class "Header"

// Create <th> elements and set text for each one
let th1 = document.createElement("th");
th1.textContent = "تاريخ المعاملة";

let th2 = document.createElement("th");
th2.textContent = "رقم المعاملة";

let th3 = document.createElement("th");
th3.textContent = " المالك";

let th4 = document.createElement("th");
th4.textContent = "المشروع";
let th5 = document.createElement("th");
th5.textContent = "المرفقات";

let th6 = document.createElement("th");
th6.textContent = "مرفقات اضافية";

// Append each <th> element to the header
header.appendChild(th1);
header.appendChild(th2);
header.appendChild(th3);
header.appendChild(th4);
header.appendChild(th5);
header.appendChild(th6);

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
    date: "21/05/2024",
    number: `12340`,
    project: `مدينة الملك فهد`,
    owner: "عبدالوهاب خالد", // Incrementing number for each row
    Attachments: "../../../assest/Icons/Owner/presentSale/Frame 53.png", // Incrementing number for each row
    moreAttachments: './../../../assest/Icons/consultative/folder.png'
};
});

// Function to get random status
function getRandomStatus() {

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
        <td>${item.date}</td>
        <td>${item.number}</td>
        <td>${item.project}</td>
        <td>${item.owner}</td>
        <td><img style="cursor: pointer;" id="openTabIcon-${i}" src="${item.Attachments}" alt="icon" /></td>
        <td><img style="cursor: pointer;" id="openTabIcon-${i}" src="${item.moreAttachments}" alt="icon" /></td>
    `;
    bodyDivData.appendChild(bodyDiv);

    // Attach event listener for opening the tab for the current item
    document.getElementById(`openTabIcon-${i}`).addEventListener('click', () => {
        openTab(item); // Open tab with the item details
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
    button.disabled = false;
}
