import { useState, useEffect } from 'react';
import getWeatherData from '../getWeatherData';

function LocationItem({ time, location, index }) {
	const [locationData, setLocationData] = useState(null);

	useEffect(() => {
		getWeatherData(location, setLocationData);
	}, []);

	if (!locationData) {
		return 'nope';
	}

	return (
		<div className='locations-item'>
			<div className='locations-item-citytime'>
				<div>{locationData.location.name}</div>
				<div className='locations-item-time'>
					{time.toLocaleTimeString([], {
						hour: 'numeric',
						minute: 'numeric',
						timeZone: locationData.location.tz_id,
					})}
				</div>
			</div>
			<div className='locations-item-temp'>{locationData.current.temp_f}°</div>
		</div>
	);
}

export default LocationItem;
