const apiKey = "YOUR_API_KEY_HERE"; // Replace with your real API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');
const errorMsg = document.getElementById('errorMessage');

// 1. Use async/await to fetch data
async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    // 2. Handle errors with try/catch
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        updateUI(data);
        
    } catch (error) {
        showError();
    }
}

// 3. Update the DOM without refreshing
function updateUI(data) {
    errorMsg.classList.add('hidden');
    weatherDisplay.classList.remove('hidden');
    
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = Math.round(data.main.temp);
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
}

function showError() {
    weatherDisplay.classList.add('hidden');
    errorMsg.classList.remove('hidden');
}

// Event Listener
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    }
});
