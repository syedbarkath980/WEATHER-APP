const API_KEY = import.meta.env.VITE_API_KEY

// DOM Elements
let input = document.querySelector("input")
let searchButton = document.querySelector("#search-btn")
let weatherInfo = document.querySelector(".weather-info")
let loading = document.querySelector("#loading-text")
let mainPage = document.querySelector(".main-page")
let unorderedList = document.querySelector("ul")
let list = document.querySelectorAll("li")

let cityInfo = document.querySelector("#city")
let tempInfo = document.querySelector("#temp")
let humidityInfo = document.querySelector("#hum")
let windspeedInfo = document.querySelector("#windspeed")
let weatherDescInfo = document.querySelector("#weatherdesc")

let errorMessage = document.querySelector("#error-message")

loading.style.display = "none"


// Logic to render weather when clicked on recent city using event delegations
unorderedList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        loading.style.display = "block"
        mainPage.classList.add("is-loading")
        let city = event.target.textContent.toLowerCase()
        let api = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        fetchDataFromApi(api, city)
    }
})


// Variables for city management
let city = ""
let cityNames = []

// Load saved cities from localStorage
let savedCities = JSON.parse(localStorage.getItem("Cities"))

if (savedCities) {
    cityNames = savedCities

    cityNames.forEach(city => {
        let li = document.createElement("li")
        let displayCity = city[0].toUpperCase() + city.slice(1)
        li.textContent = displayCity
        unorderedList.appendChild(li)
    })
}

// Search button click handler
searchButton.addEventListener("click", function () {
    loading.style.display = "block"
    mainPage.classList.add("is-loading")

    let city = input.value.trim()
    if (!city) {
        loading.style.display = "none"
        mainPage.classList.remove("is-loading")
        return
    }

    let api = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    fetchDataFromApi(api, city)
})


// Fetch weather data from API
async function fetchDataFromApi(api, city) {
    try {
        let response = await fetch(api)

        loading.style.display = "none"
        mainPage.classList.remove("is-loading")

        if (!response.ok) {
            throw new Error("Unable to fetch weather data. Please try again later!")
        }

        let result = await response.json()
        errorMessage.style.display = "none"

        // Extract weather data from WeatherAPI.com response
        let displayCity = result.location.name
        let temp = result.current.temp_c
        let humidity = result.current.humidity
        let windSpeed = result.current.wind_kph
        let weatherDesc = result.current.condition.text

        // Update UI with weather information
        cityInfo.querySelector(".value").textContent = displayCity
        tempInfo.querySelector(".value").textContent = `${temp} °C`
        humidityInfo.querySelector(".value").textContent = `${humidity}%`
        windspeedInfo.querySelector(".value").textContent = `${windSpeed} km/h`
        weatherDescInfo.querySelector(".value").textContent = weatherDesc

        // Save city to recent searches
        if (!cityNames.includes(city.toLowerCase())) {
            cityNames.push(city.toLowerCase())
            localStorage.setItem("Cities", JSON.stringify(cityNames))

            let li = document.createElement("li")
            li.textContent = displayCity
            unorderedList.appendChild(li)
        }

    } catch (error) {
        loading.style.display = "none"
        mainPage.classList.remove("is-loading")
        errorMessage.style.display = "block"
        errorMessage.textContent = error.message
    }
}

input.addEventListener("click", function () {
    errorMessage.style.display = "none"
})