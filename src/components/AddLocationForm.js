import { useState } from 'react';
import getWeatherData from '../getWeatherData';

function AddLocationForm({ weatherData, setWeatherData }) {
	const [formState, setFormState] = useState('');
	const [error, setError] = useState('');

	function handleChange(event) {
		setFormState(event.target.value);
	}

	function updateWeatherData(data) {
		if (data?.error) {
			setError(data.error);
		} else {
			setWeatherData([...weatherData, { name: data.location.name, data }]);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		setError('');
		getWeatherData(formState, updateWeatherData);
		setFormState('');
	}

	return (
		<div>
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
			<div className={error ? 'error' : null}>{error && error}</div>
		</div>
	);
}

export default AddLocationForm;
