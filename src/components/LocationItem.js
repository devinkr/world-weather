import { useState, useEffect } from 'react';
import getWeatherData from '../getWeatherData';

function LocationItem({
	time,
	location,
	setCurrentView,
	locations,
	setLocations,
}) {
	const [locationData, setLocationData] = useState(null);

	// Remove clicked location from the locations state list.
	function deleteLocation() {
		const newLocations = locations.filter((element) => element !== location);
		console.log(`NewLocations: ${newLocations} should not have ${location}`);
		setLocations(newLocations);
	}

	// Re-render anytime the locations list changes. Otherwise I get a bug when I delete a location where it doesn't update the list.
	useEffect(() => {
		getWeatherData(location, setLocationData);
	}, [locations]);

	if (!locationData) {
		return 'nope';
	}

	return (
		<div className='location'>
			<div
				className='locations-item'
				onClick={() => setCurrentView(locationData)}>
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
				<div className='locations-item-temp'>
					{locationData.current.temp_f}°
				</div>
			</div>
			<button className='locations-item-delete' onClick={deleteLocation}>
				X
			</button>
		</div>
	);
}

export default LocationItem;
