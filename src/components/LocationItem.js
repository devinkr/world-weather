import { useEffect } from 'react';
import getWeatherData from '../getWeatherData';

function LocationItem({
	units,
	time,
	weatherData,
	setWeatherData,
	idx,
	setWeatherDetails,
}) {
	function updateWeatherData(data) {
		const weatherDataCopy = [...weatherData];
		weatherDataCopy.forEach((element) => {
			if (
				element.lat === data.location.lat &&
				element.lon === data.location.lon
			) {
				element.data = data;
			}
			setWeatherData(weatherDataCopy);
		});
	}
	// Remove clicked location from the locations state list.
	function deleteLocation() {
		const newWeatherData = [];
		const locations = [];
		// Make new lists of weatherData and locations that don't have deleted location
		weatherData.forEach((element, index) => {
			if (index !== idx) {
				newWeatherData.push(element);
				locations.push({
					name: element.name,
					lat: element.lat,
					lon: element.lon,
				});
			}
		});
		setWeatherData(newWeatherData);
		const worldWeatherLocal = JSON.parse(
			localStorage.getItem('worldWeatherLocal')
		);
		localStorage.setItem(
			'worldWeatherLocal',
			JSON.stringify({
				...worldWeatherLocal,
				locations: locations,
			})
		);
	}

	useEffect(() => {
		getWeatherData(weatherData[idx].name, updateWeatherData);
	}, []);

	if (!weatherData[idx]?.data) {
		return;
	}
	const tempUnit = `temp_${units}`;
	const localData = weatherData[idx].data;
	return (
		<div className='location'>
			<div
				className='locations-item'
				onClick={() => setWeatherDetails(localData)}>
				<div className='locations-item-citytime'>
					<div>{localData.location.name}</div>
					<div className='locations-item-time'>
						{time.toLocaleTimeString([], {
							hour: 'numeric',
							minute: 'numeric',
							timeZone: localData.location.tz_id,
						})}
					</div>
				</div>
				<div className='locations-item-temp'>
					{Math.round(localData.current[tempUnit])}°
				</div>
			</div>
			<button
				aria-label={`Remove ${localData.location.name}`}
				className='locations-item-delete'
				onClick={deleteLocation}>
				X
			</button>
		</div>
	);
}

export default LocationItem;
