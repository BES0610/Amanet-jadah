// Function to create a chart with specified data and canvas ID
function createEmptyCircleChart(canvasId, data, text) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const chart = new Chart(ctx, {
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
        plugins: [ChartDataLabels, {
            id: 'customText', // Register the custom plugin
            afterDraw: function(chart) {
                const ctx = chart.ctx;
                ctx.save();
                const fontSize = (chart.height / 200).toFixed(2); // Adjust font size for line breaks
                ctx.font = `${fontSize}em HelveticaBold`; // Bold font
                ctx.textAlign = 'center';
                ctx.fillStyle = '#004693'; // Text color

                // Split the text into words
                const words = text.split(' '); // Split by space
                const lineHeight = fontSize * 1.5; // Adjust line height for spacing between lines

                // Calculate the starting vertical position
                const startY = (chart.height / 2) - (lineHeight * (words.length - 1) / 2);

                // Draw each word on a new line
                words.forEach((word, index) => {
                    ctx.fillText(word, chart.width / 2, startY + (index * lineHeight)); // Draw each word
                });

                ctx.restore();
            }
        }]
    });
}

// Create charts individually
createEmptyCircleChart('emptyCircleChart1', [20, 30, 15, 25, 10], "الاحياء");
createEmptyCircleChart('emptyCircleChart2', [25, 25, 25, 25], "الاحياء");
createEmptyCircleChart('emptyCircleChart3', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart4', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart5', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart6', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart7', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart8', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart9', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart10', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart11', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart12', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart13', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart14', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart15', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart16', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart17', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('emptyCircleChart18', [10, 40, 20, 30], "الاحياء");


// Initialize each chart in the 
createEmptyCircleChart('modalEmptyCircleChart1', [20, 30, 15, 25, 10], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart2', [25, 25, 25, 25], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart3', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart4', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart5', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart6', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart7', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart8', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart9', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart10', [10, 40, 20, 30], "الاحياء")
createEmptyCircleChart('modalEmptyCircleChart11', [10, 40, 20, 30], "الاحياء")
createEmptyCircleChart('modalEmptyCircleChart12',[10, 40, 20, 30], "الاحياء")
createEmptyCircleChart('modalEmptyCircleChart13', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart14', [10, 40, 20, 30], "الاحياء")
createEmptyCircleChart('modalEmptyCircleChart15', [10, 40, 20, 30], "الاحياء")
createEmptyCircleChart('modalEmptyCircleChart16',[10, 40, 20, 30], "الاحياء")
createEmptyCircleChart('modalEmptyCircleChart17', [10, 40, 20, 30], "الاحياء");
createEmptyCircleChart('modalEmptyCircleChart18', [10, 40, 20, 30], "الاحياء")


function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
function openModal2() {
    document.getElementById("modal2").style.display = "flex";
}

function closeModal2() {
    document.getElementById("modal2").style.display = "none";
}

function openModal3() {
    document.getElementById("modal4").style.display = "flex";
}

function closeModal3() {
    document.getElementById("modal4").style.display = "none";
}
function openModal4() {
    document.getElementById("modal4").style.display = "flex";
}

function closeModal4() {
    document.getElementById("modal4").style.display = "none";
}
function openModal5() {
    document.getElementById("modal4").style.display = "flex";
}

function closeModal5() {
    document.getElementById("modal4").style.display = "none";
}
function openModal6() {
    document.getElementById("modal4").style.display = "flex";
}

function closeModal6() {
    document.getElementById("modal4").style.display = "none";
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
    const modal2 = document.getElementById("modal2");
    if (event.target === modal2) {
        closeModal2();
    }
    const modal3 = document.getElementById("modal3");
    if (event.target === modal3) {
        closeModal3();
    }
    const modal4 = document.getElementById("modal4");
    if (event.target === modal4) {
        closeModal4();
    }
    const modal5 = document.getElementById("modal5");
    if (event.target === modal5) {
        closeModal5();
    }
    const modal6 = document.getElementById("modal6");
    if (event.target === modal6) {
        closeModal6();
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

