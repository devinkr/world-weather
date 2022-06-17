import { useEffect, useState } from 'react';
import ForecastDay from './ForecastDay';
import getWeatherData from '../getWeatherData';

function WeatherDetails({ time, locations, currentView }) {
	const [locationData, setLocationData] = useState(null);

	useEffect(() => {
		getWeatherData(locations[currentView], setLocationData);
	}, []);

	if (!locationData) {
		return 'nope';
	}

	return (
		<main className='weatherdetails'>
			<h2>
				{locationData.location.name}, {locationData.location.region}
			</h2>
			<div className='weatherdetails-date'>
				{time.toLocaleDateString([], {
					weekday: 'short',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})}
			</div>
			<div className='weatherdetails-time'>
				{time.toLocaleTimeString([], {
					hour: 'numeric',
					minute: 'numeric',
					timeZone: locationData.location.tz_id,
					timeZoneName: 'short',
				})}
			</div>
			<div className='weatherdetails-temp'>{locationData.current.temp_f}°</div>
			<div className='forecast'>
				<ForecastDay forecastData={locationData.forecast.forecastday[0]} />
				<ForecastDay forecastData={locationData.forecast.forecastday[1]} />
				<ForecastDay forecastData={locationData.forecast.forecastday[2]} />
			</div>
		</main>
	);
}

export default WeatherDetails;
