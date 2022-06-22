function ForecastDay({ forecastData }) {
	const date = new Date(forecastData.date_epoch * 1000);
	const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
	const day = weekdays[date.getUTCDay()];

	return (
		<div className='forecast-day'>
			<div className='day-of-week'>{day}</div>
			<img
				src={`https:${forecastData.day.condition.icon}`}
				alt={forecastData.day.condition.text}
			/>
			<div className='forecast-temp'>
				{forecastData.day.maxtemp_f}° {forecastData.day.mintemp_f}°
			</div>
		</div>
	);
}

export default ForecastDay;
