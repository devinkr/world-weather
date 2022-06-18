import { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import LocationItem from './components/LocationItem';
import AddLocationForm from './components/AddLocationForm';
import getWeatherData from './getWeatherData';

function App() {
	let locationsInitial;
	if (localStorage.getItem('locations')) {
		locationsInitial = JSON.parse(localStorage.getItem('locations'));
	} else {
		locationsInitial = [];
	}

	const [locations, setLocations] = useState(locationsInitial);

	const [currentView, setCurrentView] = useState(null);

	const timeInitial = new Date();
	const [time, setTime] = useState(timeInitial);

	function updateClock() {
		const timeNow = new Date();
		setTime(timeNow);
	}

	useEffect(() => {
		const clock = setInterval(updateClock, 1000);
		getWeatherData('auto:ip', setCurrentView);

		return () => {
			clearInterval(clock);
		};
	}, []);

	return (
		<div className='App'>
			<Header />
			<WeatherDetails
				time={time}
				locations={locations}
				currentView={currentView}
			/>
			<aside className='locations'>
				{locations &&
					locations.map((location, index) => (
						<LocationItem
							time={time}
							location={location}
							key={index}
							setCurrentView={setCurrentView}
						/>
					))}
				<AddLocationForm setLocations={setLocations} />
			</aside>
		</div>
	);
}

export default App;
