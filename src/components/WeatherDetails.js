import ForecastDay from './ForecastDay';

function WeatherDetails({ time, currentView }) {
	if (!currentView) {
		return 'nope';
	}

	return (
		<main className='weatherdetails'>
			<h2>{currentView.location.name}</h2>
			<div className='weatherdetails-date'>
				{time.toLocaleDateString([], {
					weekday: 'short',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					timeZone: currentView.location.tz_id,
				})}
			</div>
			<div className='weatherdetails-time'>
				{time.toLocaleTimeString([], {
					hour: 'numeric',
					minute: 'numeric',
					timeZone: currentView.location.tz_id,
					timeZoneName: 'short',
				})}
			</div>
			<div className='weatherdetails-temp'>{currentView.current.temp_f}°</div>
			<div className='forecast'>
				<ForecastDay forecastData={currentView.forecast.forecastday[0]} />
				<ForecastDay forecastData={currentView.forecast.forecastday[1]} />
				<ForecastDay forecastData={currentView.forecast.forecastday[2]} />
			</div>
		</main>
	);
}

export default WeatherDetails;
