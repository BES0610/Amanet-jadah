document.getElementById('filter').addEventListener('click', function() {
    this.classList.toggle('filter-active'); // Change background color
    const filterInputs = document.getElementById('filterInputs');
    filterInputs.classList.toggle('hidden'); // Show/hide input fields
    filterInputs.classList.toggle('filter-active-inputs'); // Toggle flex layout styles
    // console.log("ss")
});
