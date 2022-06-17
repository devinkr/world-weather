function AddLocationForm(props) {
	return (
		<form className='addlocation'>
			<label htmlFor='location' className='visuallyhidden'>
				Enter City or Zip Code
			</label>
			<input
				type='text'
				name='location'
				id='location'
				placeholder='Enter City or zip'
			/>
			<button type='submit' className='addlocation-plus'>
				+
			</button>
		</form>
	);
}

export default AddLocationForm;
