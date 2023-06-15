//fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

// Get the DOM elements for the dashboard cards
const tempEl = document.querySelector('.temp');
const humidityEl = document.querySelector('.humidity');
const windSpeedEl = document.querySelector('.wind-speed');
const windDirectionEl = document.querySelector('.wind-direction');

// Function to update the dashboard with the latest weather data
function updateDashboard(weatherData) {
    console.log(weatherData);
    tempEl.textContent = weatherData.current_weather.temperature + `°C`;
    humidityEl.textContent = weatherData.hourly.relativehumidity_2m[0] + `%`;
    windSpeedEl.textContent = weatherData.current_weather.windspeed + ` km/h`;
    windDirectionEl.textContent = weatherData.current_weather.winddirection + `°`;
}

// Function to fetch weather data from the API and update the dashboard
function fetchWeatherData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => updateDashboard(data))
        .catch(error => console.error(error));
}

// Update the dashboard on page load
fetchWeatherData();

// Refresh the dashboard every 10 minutes
setInterval(fetchWeatherData, 10 * 60 * 1000);

const ctx = document.querySelector('.myFirstchart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Wheater per day',
            data: [5, 2, 3, 12, 1, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 0, 9, 0.5)'
            ],
            borderWidth: 1
        },
        {
            label: 'Wheater per weak',
            data: [2, 19, 3, 5, 9, 3, 5, 2, 3, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(0, 255, 0, 0.5)'
            ],
            borderWidth: 1
        },
        {
            label: 'Wheater per month',
            data: [12, 1, 2, 3, 12, 19, 3, , 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(25, 0, 0.5, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ct = document.querySelector('.mySecondchart');

new Chart(ct, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Wheater per day',
            data: [5, 2, 3, 12, 1, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 0, 0, 0.5)'
            ],
            borderWidth: 2
        },
        {
            label: 'Wheater per weak',
            data: [2, 19, 3, 5, 9, 3, 5, 2, 3, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(0, 255, 0, 0.5)'
            ],
            borderWidth: 2
        },
        {
            label: 'Wheater per month',
            data: [12, 1, 2, 3, 12, 19, 3, , 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(25, 0, 0.5, 0.5)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});