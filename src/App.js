import { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import LocationItem from './components/LocationItem';
import AddLocationForm from './components/AddLocationForm';
import getWeatherData from './getWeatherData';

function App() {
	let locationsInitial;
	// If there are saved locations get those from local storage and setLocations
	if (localStorage.getItem('locations')) {
		locationsInitial = JSON.parse(localStorage.getItem('locations'));
	} else {
		locationsInitial = [];
	}

	const [locations, setLocations] = useState(locationsInitial);

	const [currentView, setCurrentView] = useState(null);

	// Time state used to track current time.
	const timeInitial = new Date();
	const [time, setTime] = useState(timeInitial);

	// Keep th time updated to current time.
	function updateClock() {
		const timeNow = new Date();
		setTime(timeNow);
	}

	// Callback used when App first mounts to set geolocation locale to first item in locations list.
	function setLocal(data) {
		// Only add the loaction if it is not already first in the list.
		if (locations[0] !== data.location.name) {
			setLocations([data.location.name, ...locations]);
		}
		setCurrentView(data);
	}

	// When App first mounts
	useEffect(() => {
		// Create an interval to update clock.
		const clock = setInterval(updateClock, 1000);
		// Get the weather data for geolocation and run setLocal callback
		getWeatherData('auto:ip', setLocal);

		// When App unmounts, clear the interval.
		return () => {
			clearInterval(clock);
		};
	}, []);

	return (
		<div className='App'>
			<Header />
			<WeatherDetails time={time} currentView={currentView} />
			<aside className='locations'>
				{locations &&
					locations.map((location, index) => (
						<LocationItem
							time={time}
							location={location}
							key={index}
							setCurrentView={setCurrentView}
							locations={locations}
							setLocations={setLocations}
						/>
					))}
				<AddLocationForm locations={locations} setLocations={setLocations} />
			</aside>
		</div>
	);
}

export default App;
