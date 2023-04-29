function updateTime() {
  let losangelesElement = document.querySelector("#los-angeles");
  if (losangelesElement) {
  }
  let losangelesDateElement = losangelesElement.querySelector(".date");
  let losangelesTimeElement = losangelesElement.querySelector(".time");
  let losangelesTime = moment().tz("America/Los_Angeles");

  losangelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losangelesTimeElement.innerHTML = losangelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

let parisElement = document.querySelector("#paris");
if (parisElement) {
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#selectCity");
citySelectElement.addEventListener("change", updateCity);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format(" A")}</small></div>
        </div>
       <div> <a href="//index.html">All cities</a></div>`;
}
