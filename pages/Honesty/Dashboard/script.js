// Function to create a chart with specified data and canvas ID
function createEmptyCircleChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: data, // Values representing percentages for each segment
                backgroundColor: ['#3B82F6', '#004693', '#FACC15', '#F59E0B', '#6366F1'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '50%',
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                datalabels: {
                    color: 'white',
                    font: {
                        weight: "100",
                        size: 10
                    },
                    formatter: () => `1800`, // Adjust as needed
                    anchor: 'right',
                    align: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            let value = context.raw || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

createEmptyCircleChart('emptyCircleChart1', [20, 30, 15, 25, 10]);
createEmptyCircleChart('emptyCircleChart2', [25, 25, 25, 25]);
createEmptyCircleChart('emptyCircleChart3', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart4', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart5', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart6', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart7', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart8', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart9', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart10', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart11', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart12', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart13', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart14', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart15', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart16', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart17', [10, 40, 20, 30]);
createEmptyCircleChart('emptyCircleChart18', [10, 40, 20, 30]);


// Initialize each chart in the 
createEmptyCircleChart('modalEmptyCircleChart1', [20, 30, 15, 25, 10]);
createEmptyCircleChart('modalEmptyCircleChart2', [25, 25, 25, 25]);
createEmptyCircleChart('modalEmptyCircleChart3', [10, 40, 20, 30]);
createEmptyCircleChart('modalEmptyCircleChart10', [20, 30, 15, 25, 10]);
createEmptyCircleChart('modalEmptyCircleChart11', [25, 25, 25, 25]);
createEmptyCircleChart('modalEmptyCircleChart12', [10, 40, 20, 30]);


function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
function openModal4() {
    document.getElementById("modal4").style.display = "flex";
}

function closeModal4() {
    document.getElementById("modal4").style.display = "none";
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
    const modal4 = document.getElementById("modal4");
    if (event.target === modal) {
        closeModal();
    }
};

setTimeout(() => {
    let li = document.getElementById("Honesty");
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

