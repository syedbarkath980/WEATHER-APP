# Weather Dashboard 🌤

A weather dashboard built using **HTML, CSS and Vanilla JavaScript**. Users can search for any city and view its current weather, with recent searches saved using browser localStorage.

**Live Demo:**
https://syedbarkath980.github.io/WEATHER-APP/

---

## Live Project Goal

Build a beginner-friendly frontend application that demonstrates:

* Fetching data from a public API
* DOM manipulation
* Async JavaScript (async/await)
* Local storage persistence
* Event delegation
* Input validation and error handling

---

## API Used

Weather data is fetched from:
https://wttr.in/{CITY}?format=j1

This API returns weather data in JSON format without requiring an API key.

---

## Features ⭐

### Search Weather

* Search any city using the wttr API
* Displays:

  * City name
  * Temperature (°C)
  * Humidity
  * Wind speed
  * Weather description

### Recent Searches (localStorage)

* Every successful search is saved
* Recent cities persist after page reload
* Duplicate cities are prevented

### Clickable Recent Cities

* Clicking a recent city fetches weather again
* Implemented using event delegation

### Responsive Design

* Layout adapts to different screen sizes
* Works across desktop and mobile devices

---

## Tech Stack

* HTML
* CSS
* Vanilla JavaScript
* Fetch API
* LocalStorage

---

## Key Concepts Practiced

* DOM selection and manipulation
* Async JavaScript and API handling
* Event handling and event delegation
* Data persistence with localStorage
* String normalization and validation

---

## Project Structure

```id="readme1"
index.html
style.css
script.js
```

---

## Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/syedbarkath980/WEATHER-APP.git
   ```
2. Open `index.html` in a browser (or use Live Server).

---

## Author

Syed Barkath
