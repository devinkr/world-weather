import ForecastDay from './ForecastDay';

function WeatherDetails(props) {
	return (
		<main className='weather-details'>
			<h2>Denver, Colorado</h2>
			<p className='date'>June 16th, 2022</p>
			<p className='time'>8:52 PM</p>
			<p className='temp'>88°F</p>
			<div className='forecast'>
				<ForecastDay />
				<ForecastDay />
				<ForecastDay />
			</div>
		</main>
	);
}

export default WeatherDetails;
