# World Weather

![World Weather Screenshot](https://github.com/devinkr/world-weather/blob/main/public/assets/world-weather.jpg?raw=true)

## Description
I have friends and family spread all over the world . I am always curious what the weather is like there and I can never remember the time difference. World Weather is a weather dashboard that allows you to see the local time and weather for any city in the world. The default view uses geolocation to show your local weather forecast. You can add additional cities and see at a glance the current time and temperature in that city. Click on any city to see a 3 day weather forecast.

## Technologies used
  - React
  - Javascript
  - REST APIs
  - JSX
  - HTML
  - CSS

  
## Installation instructions
Visit [weather.dkr.im](https://weather.dkr.im) or clone this repo and run `npm install` to install the dependencies. You will need your own API keys for [WeatherAPI](https://www.weatherapi.com/) and [Unsplash](https://unsplash.com/) and save them to `.env.local` located in the root folder.

## MVP User Stories

_**MVP User Stories**_
- _As a user, I want to see the current local temperature and time._
- _As a user, I would like to add cities where my friends live and see the current temperature and time in those locations._
- _As a user, I would like to click on a location and have it expanded to show a 3 day forecast._

_**Post MVP Stretch Goals**_
- _As a user, I would like the app to remember my locations and display them the next time I visit the site._
- _As a user, I want the background to show a random image from the currently selected location._
- _As a user, I want to be able to switch between Fahrenheit and Celsius._

## Wireframes
![World Weather](https://github.com/devinkr/world-weather/blob/main/public/assets/wireframe.png?raw=true)


## Major Hurdles
My major hurdle is always design. On this project I was much more comfortable with mobile first design to create a clean responsive look on various mobile devices but it was challenging to convert that to a design that also looked good on larger desktop resolutions. I played around with the idea of using CSS Grid but in the end it was unecessary and I stuck with Flex.

Another problem I ran into were issues with CORS. Everything worked perfectly on my local machine and even worked once I deployed my app to netlify but I would run into intermitent CORS errors. I was able to find the correct settings to add to a .toml file for netify that resolved the issue.

## Resources
   - Iconixar from [Flaticon](https://www.flaticon.com/free-icons/weather) for the Weather Favicon.
   - [WeatherAPI Documentation](https://www.weatherapi.com/docs/)
   - [Unsplash Documentation](https://unsplash.com/documentation)
