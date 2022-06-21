import ForecastDay from './ForecastDay';

function WeatherDetails({ time, weatherDetails }) {
	console.log('WeatherDetails is rendering');
	if (!weatherDetails) {
		return 'Loading';
	}
	return (
		<main className='weatherdetails'>
			<h2>{weatherDetails.location.name}</h2>
			<div className='weatherdetails-date'>
				{time.toLocaleDateString([], {
					weekday: 'short',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					timeZone: weatherDetails.location.tz_id,
				})}
			</div>
			<div className='weatherdetails-time'>
				{time.toLocaleTimeString([], {
					hour: 'numeric',
					minute: 'numeric',
					timeZone: weatherDetails.location.tz_id,
					timeZoneName: 'short',
				})}
			</div>
			<div className='weatherdetails-temp'>
				{weatherDetails.current.temp_f}°
			</div>
			<div className='forecast'>
				<ForecastDay forecastData={weatherDetails.forecast.forecastday[0]} />
				<ForecastDay forecastData={weatherDetails.forecast.forecastday[1]} />
				<ForecastDay forecastData={weatherDetails.forecast.forecastday[2]} />
			</div>
		</main>
	);
}

export default WeatherDetails;
