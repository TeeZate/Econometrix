// First, add Chart.js to your HTML
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('financialChart').getContext('2d');
    
    // Sample data
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Market Performance',
            data: [65, 59, 80, 81, 56, 55, 72],
            fill: true,
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderColor: 'rgba(0, 123, 255, 1)',
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(0, 123, 255, 1)',
            pointBorderColor: '#fff',
            pointHoverRadius: 6
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    };

    const myChart = new Chart(ctx, config);

    // Handle period buttons
    document.querySelectorAll('.graph-controls .btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.graph-controls .btn').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically update the chart data based on the selected period
            // For demo purposes, we'll just log the period
            console.log('Selected period:', this.dataset.period);
        });
    });
});
