function getMeteo(lat, lon) {
  const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const meteo = data.current;

      // Log di controllo per assicurarti che weather_code arrivi
      console.log("Weather Code:", meteo.weather_code);

      document.getElementById('temp').textContent = meteo.temperature_2m;
      document.getElementById('umidita').textContent = meteo.relative_humidity_2m;
      document.getElementById('nuvole').textContent = meteo.cloud_cover;
      document.getElementById('vento').textContent = meteo.wind_speed_10m;
      document.getElementById('pioggia').textContent = meteo.precipitation;

      // Mostra icona meteo
      const icona = getWeatherIcon(meteo.weather_code);
      document.getElementById('icona').textContent = icona;
    })
    .catch(error => console.error("Errore nel recupero meteo:", error));
}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getMeteo(lat, lon);
    },
    (error) => {
      console.error("Errore nella geolocalizzazione:", error);
      // Fallback su Trento
      getMeteo(46.0679, 11.1211);
    }
  );
} else {
  console.error("Geolocalizzazione non supportata");
  getMeteo(46.0679, 11.1211);
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

