import { useState } from 'react';
import getWeatherData from '../getWeatherData';

function AddLocationForm({ weatherData, setWeatherData, setError }) {
	const [formState, setFormState] = useState('');

	function handleChange(event) {
		setFormState(event.target.value);
	}

	function updateWeatherData(data) {
		if (data?.error) {
			setError(data.error);
		} else {
			setWeatherData([
				...weatherData,
				{
					name: data.location.name,
					lat: data.location.lat,
					lon: data.location.lon,
					data,
				},
			]);
			const locations = JSON.parse(localStorage.getItem('locations'));
			localStorage.setItem(
				'locations',
				JSON.stringify([
					...locations,
					{
						name: data.location.name,
						lat: data.location.lat,
						lon: data.location.lon,
					},
				])
			);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		setError('');
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
