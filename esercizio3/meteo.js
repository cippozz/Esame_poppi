const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=46.0679&longitude=11.1211&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code";

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const meteo = data.current;

    document.getElementById('temp').textContent = meteo.temperature_2m;
    document.getElementById('umidita').textContent = meteo.relative_humidity_2m;
    document.getElementById('nuvole').textContent = meteo.cloud_cover;
    document.getElementById('vento').textContent = meteo.wind_speed_10m;
    document.getElementById('pioggia').textContent = meteo.precipitation;
  })
  .catch(err => {
    console.error("Errore nel recupero dei dati meteo:", err);
  });
