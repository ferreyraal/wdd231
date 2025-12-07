
const apiKey = "62c78e940b2e12e86f2fcba9c1e6e52b";
const lat = -34.6037;
const lon = -58.3816;
const units = "metric";

async function loadWeather() {
    try {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=en`;
        const wResponse = await fetch(weatherURL);
        const wData = await wResponse.json();

        document.querySelector("#current-temp").textContent = `${Math.round(wData.main.temp)}°C`;
        document.querySelector("#weather-desc").textContent = wData.weather[0].description;
        document.querySelector("#humidity").textContent = wData.main.humidity + "%";

        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=en`;
        const fResponse = await fetch(forecastURL);
        const fData = await fResponse.json();
        const iconCode = wData.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.querySelector("#weather-icon").src = iconURL;
        document.querySelector("#weather-icon").alt = wData.weather[0].description;

        document.querySelector("#current-temp").textContent = `${Math.round(wData.main.temp)}°C`;
        document.querySelector("#weather-desc").textContent = wData.weather[0].description;
        document.querySelector("#humidity").textContent = wData.main.humidity + "%";


        const dailyGroups = {};

        fData.list.forEach(item => {
            const date = item.dt_txt.split(" ")[0];
            if (!dailyGroups[date]) {
                dailyGroups[date] = [];
            }
            dailyGroups[date].push(item);
        });

        const forecastDays = Object.keys(dailyGroups).slice(1, 4);
        const forecastContainer = document.querySelector("#forecast");

        forecastContainer.innerHTML = "";

        forecastDays.forEach((day, index) => {
            const temps = dailyGroups[day].map(d => d.main.temp);
            const avgTemp = Math.round(
                temps.reduce((a, b) => a + b, 0) / temps.length
            );

            const dateLabel = new Date(day).toLocaleDateString("en-US", {
                weekday: "long"
            });

            const p = document.createElement("p");
            p.textContent = `${dateLabel}: ${avgTemp}°C`;
            forecastContainer.appendChild(p);
        });

    } catch (error) {
        console.error("Weather API error:", error);
    }
}


loadWeather();
