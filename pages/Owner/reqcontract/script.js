

document.addEventListener('DOMContentLoaded', function() {
    const specificRadio = document.getElementById('specific');
    const conditionalSelect = document.querySelector('.conditional-select');

    specificRadio.addEventListener('change', function() {
        conditionalSelect.style.display = specificRadio.checked ? 'block' : 'none';
    });

    const allRadio = document.getElementById('all');
    allRadio.addEventListener('change', function() {
        conditionalSelect.style.display = 'none';
    });
});
