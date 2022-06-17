import Header from './components/Header';
import WeatherDetails from './components/WeatherDetails';
import LocationItem from './components/LocationItem';
import AddLocationForm from './components/AddLocationForm';

function App() {
	return (
		<div className='App'>
			<Header />
			<WeatherDetails />
			<aside className='locations'>
				<LocationItem />
				<LocationItem />
				<LocationItem />
				<LocationItem />
				<AddLocationForm />
			</aside>
		</div>
	);
}

export default App;
