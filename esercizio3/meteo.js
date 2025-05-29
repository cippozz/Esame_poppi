function toggleInput() {
  const manualInput = document.getElementById("manualInput");
  const selected = document.querySelector('input[name="posizione"]:checked').value;
  manualInput.style.display = selected === "manual" ? "flex" : "none";

  if (selected === "current") {
    getCurrentPositionMeteo();
  }
}

function loadManualMeteo() {
  const lat = parseFloat(document.getElementById("latInput").value);
  const lon = parseFloat(document.getElementById("lonInput").value);

  if (isNaN(lat) || isNaN(lon)) {
    alert("Inserisci latitudine e longitudine validi.");
    return;
  }

  getMeteo(lat, lon);
}

function getCurrentPositionMeteo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getMeteo(lat, lon);
      },
      (error) => {
        console.error("Errore nella geolocalizzazione:", error);
        alert("Impossibile ottenere la posizione. Inserisci latitudine e longitudine manualmente.");
      }
    );
  } else {
    alert("Geolocalizzazione non supportata.");
  }
}

function getMeteo(lat, lon) {
  const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const meteo = data.current_weather;

      if (!meteo) {
        alert("Dati meteo non disponibili per questa posizione.");
        return;
      }

      document.getElementById('temp').textContent = meteo.temperature ?? '--';
      document.getElementById('umidita').textContent = data.hourly.relative_humidity_2m ? data.hourly.relative_humidity_2m[0] : '--';
      document.getElementById('nuvole').textContent = data.hourly.cloud_cover ? data.hourly.cloud_cover[0] : '--';
      document.getElementById('vento').textContent = meteo.windspeed ?? '--';
      document.getElementById('pioggia').textContent = data.hourly.precipitation ? data.hourly.precipitation[0] : '--';

      const icona = getWeatherIcon(meteo.weathercode ?? meteo.weather_code);
      document.getElementById('icona').textContent = icona;
    })
    .catch(error => {
      console.error("Errore nel recupero meteo:", error);
      alert("Errore nel recupero dati meteo.");
    });
}

function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if (code === 1 || code === 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 57) return "🌦️";
  if (code >= 61 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 77) return "❄️";
  if (code >= 80 && code <= 82) return "🌧️";
  if (code >= 95 && code <= 99) return "⛈️";
  return "❓";
}

window.onload = () => {
  toggleInput();
};
