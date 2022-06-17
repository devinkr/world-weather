import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import LocationsList from './components/LocationsList';
import AddLocationForm from './components/AddLocationForm';

function App() {
	return (
		<div className='App'>
			<Header />
			<WeatherDetails />
			<LocationsList />
			<AddLocationForm />
		</div>
	);
}

export default App;
