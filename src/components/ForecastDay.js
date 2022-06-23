function ForecastDay({ units, forecastData }) {
	const date = new Date(forecastData.date_epoch * 1000);
	const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
	const day = weekdays[date.getUTCDay()];
	const maxTempUnit = `maxtemp_${units}`;
	const minTempUnit = `mintemp_${units}`;

	return (
		<div className='forecast-day'>
			<div className='day-of-week'>{day}</div>
			<img
				src={`https:${forecastData.day.condition.icon}`}
				alt={forecastData.day.condition.text}
			/>
			<div className='forecast-temp'>
				{Math.round(forecastData.day[maxTempUnit])}°{' '}
				{Math.round(forecastData.day[minTempUnit])}°
			</div>
		</div>
	);
}

export default ForecastDay;
