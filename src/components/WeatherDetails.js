import forecastDay from './forecastDay';

function WeatherDetails(props) {
	return (
		<div className='weather-details'>
			<h2>Weather Details</h2>
			<forecastDay />
			<forecastDay />
			<forecastDay />
		</div>
	);
}

export default WeatherDetails;
