# Project Proposal

## Project Description

World Weather is a dashboard to see the current weather from around the world. The default shows your local information but you can add multiple other locations and see the local time and local weather for each at a glance. You can select one to see an expanded view with 3 day weather forecast.

## Wireframes

### Homepage
![wireframe](https://github.com/devinkr/world-weather/blob/main/planning/wireframe.png)

### MVP User Stories

_**MVP User Stories**_
- _As a user, I want to see the current local temperature and time._
- _As a user, I would like to add cities where my friends live and see the current temperature and time in those locations._
- _As a user, I want the background to show a random image from the currently selected location._
- _As a user, I want to be able to switch between Farenheit and Celsius._
- _As a user, I would like the app to remember my locations and display them the next time I visit the site._
- _As a user, I would like to click on a location and have it expanded to show a 3 day forecast._

_**Post MVP Stretch Goals**_
- _As a user, I would like the option to show additional information like precipitation, wind direction, wind speed, air quality, sunrise/sunset._
- _As a user, I would like the color scheme to change based on background image._

## API

[Weather API Documentation](https://www.weatherapi.com/docs/)

#### Reponse for Denver
```json
{
    "location": {
        "name": "Denver",
        "region": "Colorado",
        "country": "United States of America",
        "lat": 39.74,
        "lon": -104.98,
        "tz_id": "America/Denver",
        "localtime_epoch": 1655172163,
        "localtime": "2022-06-13 20:02"
    },
    "current": {
        "last_updated_epoch": 1655171100,
        "last_updated": "2022-06-13 19:45",
        "temp_c": 34.4,
        "temp_f": 93.9,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 8,
        "cloud": 25,
        "feelslike_c": 32.5,
        "feelslike_f": 90.4,
        "uv": 8.0
    }
}
```

#### 3 day forecast for Denver
```json
{
    "location": {
        "name": "Denver",
        "region": "Colorado",
        "country": "United States of America",
        "lat": 39.74,
        "lon": -104.98,
        "tz_id": "America/Denver",
        "localtime_epoch": 1655172310,
        "localtime": "2022-06-13 20:05"
    },
    "current": {
        "last_updated_epoch": 1655168400,
        "last_updated": "2022-06-13 19:00",
        "temp_c": 34.4,
        "temp_f": 93.9,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 8,
        "cloud": 25,
        "feelslike_c": 32.5,
        "feelslike_f": 90.4,
        "uv": 8.0
    },
    "forecast": {
        "forecastday": [
            {
                "date": "2022-06-13",
                "date_epoch": 1655078400,
                "day": {
                    "maxtemp_c": 37.7,
                    "maxtemp_f": 99.9,
                    "mintemp_c": 18.6,
                    "mintemp_f": 65.5,
                    "avgtemp_c": 28.0,
                    "avgtemp_f": 82.4,
                    "totalprecip_mm": 0.0,
                    "totalprecip_in": 0.0,
                    "daily_will_it_rain": 0,
                    "daily_chance_of_rain": 0,
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": 0,
                    "condition": {
                        "text": "Sunny",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        "code": 1000
                    }
                },
            },
            {
                "date": "2022-06-14",
                "date_epoch": 1655164800,
                "day": {
                    "maxtemp_c": 32.8,
                    "maxtemp_f": 91.0,
                    "mintemp_c": 17.0,
                    "mintemp_f": 62.6,
                    "avgtemp_c": 24.2,
                    "avgtemp_f": 75.5,
                    "totalprecip_mm": 0.0,
                    "totalprecip_in": 0.0,
                    "daily_will_it_rain": 0,
                    "daily_chance_of_rain": 0,
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": 0,
                    "condition": {
                        "text": "Sunny",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                        "code": 1000
                    }
                },
            },
            {
                "date": "2022-06-15",
                "date_epoch": 1655251200,
                "day": {
                    "maxtemp_c": 33.5,
                    "maxtemp_f": 92.3,
                    "mintemp_c": 13.8,
                    "mintemp_f": 56.8,
                    "avgtemp_c": 23.2,
                    "avgtemp_f": 73.7,
                    "totalprecip_mm": 1.3,
                    "totalprecip_in": 0.05,
                    "daily_will_it_rain": 1,
                    "daily_chance_of_rain": 84,
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": 0,
                    "condition": {
                        "text": "Patchy rain possible",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                        "code": 1063
                    }
                },
            }
        ]
    }
}
```

## Component Hierarchy

