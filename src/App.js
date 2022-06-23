import { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import LocationItem from './components/LocationItem';
import AddLocationForm from './components/AddLocationForm';
import getWeatherData from './getWeatherData';

function App() {
	let worldWeatherLocal;
	// If there are saved locations get those from local storage and setLocations
	if (localStorage.getItem('worldWeatherLocal')) {
		worldWeatherLocal = JSON.parse(localStorage.getItem('worldWeatherLocal'));
	} else {
		worldWeatherLocal = { units: 'f', locations: [] };
	}

	//Build weatherDataInitial from list of locations
	const weatherDataInitial = [];
	worldWeatherLocal.locations.forEach((element) =>
		weatherDataInitial.push({
			name: element.name,
			lat: element.lat,
			lon: element.lon,
			data: null,
		})
	);

	// State to hold all the weather Data
	const [weatherData, setWeatherData] = useState(weatherDataInitial);
	const [weatherDetails, setWeatherDetails] = useState(null);
	const [units, setUnits] = useState(worldWeatherLocal.units);

	// Error state
	const [error, setError] = useState('');

	// Time state used to track current time.
	const timeInitial = new Date();
	const [time, setTime] = useState(timeInitial);

	// Callback used when App first mounts to set geolocation city to first item in weatherData list.
	function setLocal(data) {
		if (data?.error) {
			setError('Could not find your location.');
		} else {
			const newLoc = {
				name: data.location.name,
				lat: data.location.lat,
				lon: data.location.lon,
				data: data,
			};
			if (weatherData.length > 0) {
				// Add the location only if it is not already in the list.
				const idx = weatherData.findIndex(
					(element) =>
						element.lat === data.location.lat &&
						element.lon === data.location.lon
				);
				// If it's not in the list then add it to the beginning
				if (idx === -1) {
					setWeatherData([newLoc, ...weatherData]);
					// Add it to beginning of localStorage locations list as well.
					localStorage.setItem(
						'worldWeatherLocal',
						JSON.stringify({
							...worldWeatherLocal,
							locations: [newLoc, ...worldWeatherLocal.locations],
						})
					);
				}
				// If it already is in the list, then update weather data
				else {
					const copyWeatherData = [...weatherData];
					copyWeatherData[idx] = newLoc;
					setWeatherData(copyWeatherData);
				}
				// If there were no locations saved, add the weatherData and save location in local storage.
			} else {
				setWeatherData([newLoc]);
				localStorage.setItem(
					'worldWeatherLocal',
					JSON.stringify({ ...worldWeatherLocal, locations: [newLoc] })
				);
			}
			// Update the detail view with local weather data.
			setWeatherDetails(data);
		}
	}

	// When App first mounts
	useEffect(() => {
		// Create an interval to update clock every 10 seconds (Every second seems like overkill)
		const clock = setInterval(() => {
			const timeNow = new Date();
			setTime(timeNow);
		}, 10000);

		// Get the weather data for geolocation by IP and run setLocal callback
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				getWeatherData(
					`${position.coords.latitude},${position.coords.longitude}`,
					setLocal
				);
			});
		} else {
			getWeatherData('auto:ip', setLocal);
		}

		// When App unmounts, clear the interval.
		return () => {
			clearInterval(clock);
		};
	}, []);

	return (
		<>
			<Header units={units} setUnits={setUnits} />
			<WeatherDetails
				units={units}
				time={time}
				weatherDetails={weatherDetails}
			/>
			<div className='locations'>
				{weatherData.length > 0 &&
					weatherData.map((element, index) => (
						<LocationItem
							units={units}
							time={time}
							weatherData={weatherData}
							setWeatherData={setWeatherData}
							idx={index}
							setWeatherDetails={setWeatherDetails}
							key={index}
						/>
					))}
			</div>
			{error && (
				<div className='error'>
					{error}{' '}
					<button
						className='error-close'
						aria-label='Clear error'
						onClick={() => setError('')}>
						X
					</button>
				</div>
			)}
			<AddLocationForm
				weatherData={weatherData}
				setWeatherData={setWeatherData}
				setError={setError}
			/>
		</>
	);
}

export default App;
