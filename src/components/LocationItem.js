import { useEffect } from 'react';
import getWeatherData from '../getWeatherData';

function LocationItem({
	time,
	weatherData,
	setWeatherData,
	idx,
	setWeatherDetails,
}) {
	function updateWeatherData(data) {
		const weatherDataCopy = [...weatherData];
		weatherDataCopy.forEach((element) => {
			if (element.name === data.location.name) {
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
				locations.push(element.name);
			}
		});
		setWeatherData(newWeatherData);
		localStorage.setItem('locations', JSON.stringify(locations));
	}

	useEffect(() => {
		getWeatherData(weatherData[idx].name, updateWeatherData);
	}, []);

	if (!weatherData[idx]?.data) {
		return;
	}

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
				<div className='locations-item-temp'>{localData.current.temp_f}°</div>
			</div>
			<button className='locations-item-delete' onClick={deleteLocation}>
				X
			</button>
		</div>
	);
}

export default LocationItem;
