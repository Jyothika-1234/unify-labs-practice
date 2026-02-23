// Data Fetching Service
const API_ENDPOINTS = {
    weather: "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.00&current_weather=true",
    crypto: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
};

class NexusApp {
    constructor() {
        this.dashboard = document.getElementById('dashboard');
        this.init();
    }

    async init() {
        this.loadFromStorage();
        await this.fetchAllData();
        this.setupEventListeners();
    }

    async fetchAllData() {
        document.getElementById('last-updated').innerText = "Syncing...";
        
        try {
            const [weatherRes, cryptoRes] = await Promise.all([
                fetch(API_ENDPOINTS.weather),
                fetch(API_ENDPOINTS.crypto)
            ]);

            const weatherData = await weatherRes.json();
            const cryptoData = await cryptoRes.json();

            const processedData = {
                temp: `${weatherData.current_weather.temperature}°C`,
                btc: `$${cryptoData.bitcoin.usd.toLocaleString()}`,
                eth: `$${cryptoData.ethereum.usd.toLocaleString()}`
            };

            this.render(processedData);
            this.saveToStorage(processedData);
            
            document.getElementById('last-updated').innerText = `Live: ${new Date().toLocaleTimeString()}`;
        } catch (error) {
            console.error("Nexus Sync Error:", error);
            document.getElementById('last-updated').innerText = "Status: Offline (Using Cache)";
        }
    }

    render(data) {
        this.dashboard.innerHTML = `
            <div class="widget-card">
                <h3>New York Weather</h3>
                <div class="data-value">${data.temp}</div>
                <p>Real-time Local Temp</p>
            </div>
            <div class="widget-card">
                <h3>Bitcoin (USD)</h3>
                <div class="data-value">${data.btc}</div>
                <p>Market Price</p>
            </div>
            <div class="widget-card">
                <h3>Ethereum (USD)</h3>
                <div class="data-value">${data.eth}</div>
                <p>Market Price</p>
            </div>
        `;
    }

    saveToStorage(data) {
        localStorage.setItem('nexus_cache', JSON.stringify(data));
    }

    loadFromStorage() {
        const cached = localStorage.getItem('nexus_cache');
        if (cached) {
            this.render(JSON.parse(cached));
        }
    }

    setupEventListeners() {
        document.getElementById('refresh-btn').addEventListener('click', () => this.fetchAllData());
        document.getElementById('clear-storage').addEventListener('click', () => {
            localStorage.clear();
            location.reload();
        });
    }
}

// Start the Application
new NexusApp();
