// Get references to each tab link and content by their IDs
const tabs = [
    { link: document.querySelector('.tab-link[data-tab="OnwerTap"]'), content: document.getElementById('OnwerTap') },
    { link: document.querySelector('.tab-link[data-tab="consultativeTap"]'), content: document.getElementById('consultativeTap') },
    { link: document.querySelector('.tab-link[data-tab="ContractorsTap"]'), content: document.getElementById('ContractorsTap') },
    { link: document.querySelector('.tab-link[data-tab="HonestyTap"]'), content: document.getElementById('HonestyTap') },
    { link: document.querySelector('.tab-link[data-tab="login"]'), content: document.getElementById('login') } // New Login Tab
];

// Variable to track the currently active tab
let activeTab = null;

// Function to hide all tab contents
function hideAllTabs() {
    tabs.forEach(tab => {
        if (tab.content) {
            tab.content.style.display = 'none';
        }
    });
}

// Function to handle showing and hiding tab content
function toggleTab(tabContent) {
    if (activeTab === tabContent) {
        // If the clicked tab is already active, hide it
        hideAllTabs();
        activeTab = null; // Reset active tab
    } else {
        // If a different tab is clicked, show it and hide others
        hideAllTabs();
        tabContent.style.display = 'flex'; // Change this to your desired display type
        activeTab = tabContent; // Set the clicked tab as active
    }
}

// Attach event listeners for each tab link
tabs.forEach(tab => {
    if (tab.link) {
        tab.link.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            toggleTab(tab.content);
        });
    }
});

// Prevent closing the tab when clicking inside the tab content
tabs.forEach(tab => {
    if (tab.content) {
        tab.content.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling to the document
        });
    }
});

// Event listener for closing tabs when clicking anywhere else on the page
document.addEventListener('click', function() {
    hideAllTabs();
    activeTab = null; // Reset active tab
});

// Hide all tabs on initial load
hideAllTabs(); // Ensure no tabs are displayed by default


function toggleDropdown() {
    const linkContainer = document.querySelector('#smalltap');
    linkContainer.classList.toggle('active');
}
