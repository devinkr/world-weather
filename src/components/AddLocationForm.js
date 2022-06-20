import { useState, useEffect } from 'react';

function AddLocationForm({ locations, setLocations }) {
	const [formState, setFormState] = useState('');

	// Anytime locations change, save the location state to localStorage.
	useEffect(() => {
		if (locations) {
			localStorage.setItem('locations', JSON.stringify(locations));
		}
	}, [locations]);

	function handleChange(event) {
		setFormState(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setLocations([...locations, formState]);
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
