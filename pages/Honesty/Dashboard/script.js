// Select the canvas context
const ctx = document.getElementById('emptyCircleChart').getContext('2d');

// Initialize the chart
const emptyCircleChart = new Chart(ctx, {
    type: 'doughnut', // Use doughnut to create a ring or hollow circle
    data: {
        labels: ['Blue Segment', 'Dark Blue Segment', 'Yellow Segment', 'Orange Segment', 'Purple Segment'], // Labels for each segment
        datasets: [{
            data: [20, 30, 15, 25, 10], // Values representing percentages for each segment
            backgroundColor: ['#3B82F6', '#004693', '#FACC15', '#F59E0B', '#6366F1'], // Colors for each segment
            borderWidth: 0 // Remove any border around the circle
        }]
    },
    options: {
        responsive: true,
        cutout: '80%', // Adjusts the thickness of the ring, higher value means thinner ring
        plugins: {
            legend: {
                display: true, // Show the legend with labels
                position: 'top'
            },
            datalabels: {
                color: 'white', // Text color for the numbers
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: (value) => `${value}%`, // Show percentage inside each segment
                anchor: 'center', // Position the text in the center of each segment
                align: 'center'
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
    plugins: [ChartDataLabels] // Register the datalabels plugin
});


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