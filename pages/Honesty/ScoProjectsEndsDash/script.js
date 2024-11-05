setTimeout(() => {
    // append header    
// append body 
const bodyDivData = document.getElementById('bodyDiv');
const paginationDiv = document.getElementById('pagination');

const itemsPerPage = 3; // Number of items per page
const totalItems = 100; // Total number of items
const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
let currentPage = 1; // Initialize current page

// Sample data array with 100 objects
const data = Array.from({ length: totalItems }, (_, index) => {
return {
    // projectname: `مشروع امانة جدة لضخ المياه`,
    stage: "مرحلة ", // Incrementing number for each row
    start1: `يوم`,
    end1: "100% ", // Incrementing number for each row
    start2: ` يوم`,
    end2: "100% ", // Incrementing number for each row
    arrow: " ./../../../assest/Icons/Honesty/arrowdown.png" 
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
    bodyDiv.style.width = "96%"

    // Populate the body div with content
    bodyDiv.innerHTML = `
        <td>${item.stage}${i+1} </td>
        <td>${item.start1}${i+1}</td>
        <td>${item.end1}</td>
        <td>${item.start2}${i+1}</td>
        <td>${item.end2}</td>
        <td><img style="cursor: pointer;" id="openTabIcon-${i}" src="${item.arrow}" alt="icon" /></td>
    `;
    bodyDivData.appendChild(bodyDiv);
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

// Initial render
renderItems(1); // Render the first page


let li = document.getElementById("Honesty");
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

