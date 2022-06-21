import { useState } from 'react';
import getWeatherData from '../getWeatherData';

function AddLocationForm({ weatherData, setWeatherData }) {
	const [formState, setFormState] = useState('');

	function handleChange(event) {
		setFormState(event.target.value);
	}

	function updateWeatherData(data) {
		setWeatherData([...weatherData, { name: data.location.name, data }]);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(formState);
		getWeatherData(formState, updateWeatherData);
		setFormState('');
	}

	return (
		<form className='addlocation' onSubmit={handleSubmit}>
			<label htmlFor='location' className='visuallyhidden'>
				Enter City or Zip Code
			</label>
			<input
				type='text'
				name='location'
				id='location'
				placeholder='Enter City or zip'
				required
				onChange={handleChange}
				value={formState}
			/>
			<button type='submit' className='addlocation-plus'>
				+
			</button>
		</form>
	);
}

export default AddLocationForm;
