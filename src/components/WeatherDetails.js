import ForecastDay from './ForecastDay';

function WeatherDetails(props) {
	return (
		<main className='weatherdetails'>
			<h2>Denver, Colorado</h2>
			<div className='weatherdetails-date'>June 16th, 2022</div>
			<div className='weatherdetails-time'>8:52 PM</div>
			<div className='weatherdetails-temp'>88°F</div>
			<div className='forecast'>
				<ForecastDay />
				<ForecastDay />
				<ForecastDay />
			</div>
		</main>
	);
}

export default WeatherDetails;
