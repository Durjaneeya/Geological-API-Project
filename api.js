function getdata() {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;
      document.getElementById("lati").innerHTML = latitude;
      document.getElementById("longi").innerHTML = longitude;
      latitude.innerHTML = latitude;
      longitude.innerHTML = longitude;
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d84392f47a5189814d745caf26996bf9`;
      console.log(url);

      fetch(url)
        .then(res=> res.json())
        .then(data=>{
        console.log(data);
          let tableData = "";
  
            tableData += `<tr>
          <td>Lat: ${data.coord.lat}</td>
          <td>Lat: ${data.coord.lon}</td>
          </tr>
      
          <tr>
          <td>Timezone: ${data.timezone}</td>
          </tr>
      
          <tr>
          <td>Wind Speed: ${data.wind.speed}</td>
          </tr>
      
          <tr>
          <td>Pressure: ${data.main.pressure}</td>
          </tr>
      
          <tr>
          <td>Humidity: ${data.main.humidity}</td>
          </tr>
      
          <tr>
          <td>Wind Direction: ${data.wind.speed}</td>
          </tr>
      
          <tr>
          <td>Temp: ${data.main.temp}</td>
          </tr>
      
          <tr>
          <td>Feels Like: ${data.main.feels_like}</td>
          </tr>
          
          `;
  
          document.getElementById("table_body").innerHTML = tableData;
        });
    });
  }
  getdata()
  

  let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 28.5076558, lng: 77.02766 },
      zoom: 9,
    });
  }
  window.initMap = initMap;
  
  let button = document.getElementById("btn");
  if(button)
  button.onclick=getdata();
  
  