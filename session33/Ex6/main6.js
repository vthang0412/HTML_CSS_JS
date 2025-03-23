const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️",
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️",
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️",
    },
};

function getWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("weatherResult");

    const city = Object.keys(weatherData).find(
        (key) => key.toLowerCase() === cityInput.toLowerCase()
    );

    if (city) {
        const data = weatherData[city];
        resultDiv.innerHTML = `
        <h2>${city}</h2>
        <div class="infor">
          <p style="font-size: 50px;">${data.icon}</p>
          <p style="font-size: 30px;"><strong>${data.temperature}°C</strong></p>
          <div class="col">
            <p>${data.description}</p>
            <p>Độ ẩm: ${data.humidity}%</p>
            <p>Tốc độ gió: ${data.windSpeed} km/h</p>
          </div>
        </div>
      `;
        resultDiv.style.display = "block";
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Không tìm thấy thông tin thời tiết cho thành phố này.</p>`;
        resultDiv.style.display = "block";
    }
}