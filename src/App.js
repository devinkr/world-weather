import { useState, useEffect } from 'react';
import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import LocationItem from './components/LocationItem';
import AddLocationForm from './components/AddLocationForm';

function App() {
	let locationsInitial = ['Mexico City', 'London', 'New York', 'Tokyo'];
	/* 	if (!localStorage.getItem('locations')) {
		locationsInitial = JSON.parse(localStorage.getItem('locations'));
	} else {
		locationsInitial = ['Mexico City', 'London', 'New York', 'Tokyo'];
	} */

	const [locations, setLocations] = useState(locationsInitial);
	const [weatherData, setWeatherData] = useState([]);
	const [currentView, setCurrentView] = useState(0);
	const timeInitial = new Date();
	const [time, setTime] = useState(timeInitial);

	function updateClock() {
		const timeNow = new Date();
		setTime(timeNow);
	}

	useEffect(() => {
		const clock = setInterval(updateClock, 1000);

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
				{locations.map((location, index) => (
					<LocationItem
						time={time}
						location={location}
						key={index}
						index={index}
					/>
				))}
				<AddLocationForm />
			</aside>
		</div>
	);
}

export default App;
