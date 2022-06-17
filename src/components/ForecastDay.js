function ForecastDay({ forecastData }) {
	const date = new Date(forecastData.date_epoch * 1000);
	const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
	const day = weekdays[date.getUTCDay()];

	return (
		<div className='forecast-day'>
			<span className='day-of-week'>{day}</span>
			<img
				src={`https:${forecastData.day.condition.icon}`}
				alt={forecastData.day.condition.text}
			/>
			<span className='forecast-temp'>
				{forecastData.day.maxtemp_f}° {forecastData.day.mintemp_f}°
			</span>
		</div>
	);
}

export default ForecastDay;
