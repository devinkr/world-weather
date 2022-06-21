import { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import LocationItem from './components/LocationItem';
import AddLocationForm from './components/AddLocationForm';
import getWeatherData from './getWeatherData';

function App() {
	console.log('App is rendering');
	let locations;
	// If there are saved locations get those from local storage and setLocations
	if (localStorage.getItem('locations')) {
		locations = JSON.parse(localStorage.getItem('locations'));
	} else {
		locations = [];
	}

	//Build weatherDataInitial from list of locations
	const weatherDataInitial = [];
	locations.forEach((element) =>
		weatherDataInitial.push({ name: element, data: null })
	);

	// State to hold all the weather Data
	const [weatherData, setWeatherData] = useState(weatherDataInitial);
	const [weatherDetails, setWeatherDetails] = useState(null);

	// Error state
	const [error, setError] = useState('');

	// Time state used to track current time.
	const timeInitial = new Date();
	const [time, setTime] = useState(timeInitial);

	// Keep the time updated to current time.
	function updateClock() {
		const timeNow = new Date();
		setTime(timeNow);
	}

	// Callback used when App first mounts to set geolocation city to first item in weatherData list.
	function setLocal(data) {
		if (data?.error) {
			setError('Could not find your location.');
		} else {
			if (weatherData.length > 0) {
				// Add the location only if it is not already in the list.
				if (weatherData[0].name !== data.location.name) {
					setWeatherData([
						{ name: data.location.name, data: data },
						...weatherData,
					]);
					// Add it to beginning of localStorage list as well.
					localStorage.setItem(
						'locations',
						JSON.stringify([data.location.name, ...locations])
					);
				}
				// If it already is first in the list, then update weather data
				else {
					const copyWeatherData = [...weatherData];
					copyWeatherData[0] = { name: data.location.name, data: data };
					setWeatherData(copyWeatherData);
				}
				// If there were no locations saved add the weatherData and save location in local storage.
			} else {
				setWeatherData([{ name: data.location.name, data: data }]);
				localStorage.setItem('locations', JSON.stringify([data.location.name]));
			}
			setWeatherDetails(data);
		}
	}

	// When App first mounts
	useEffect(() => {
		// Create an interval to update clock.
		const clock = setInterval(updateClock, 30000);
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
			<WeatherDetails time={time} weatherDetails={weatherDetails} />
			<aside className='locations'>
				{weatherData.length > 0 &&
					weatherData.map((element, index) => (
						<LocationItem
							time={time}
							weatherData={weatherData}
							setWeatherData={setWeatherData}
							idx={index}
							setWeatherDetails={setWeatherDetails}
							key={index}
						/>
					))}
				<AddLocationForm
					weatherData={weatherData}
					setWeatherData={setWeatherData}
				/>
				<div className={error ? 'error' : null}>{error && error}</div>
			</aside>
		</div>
	);
}

export default App;
