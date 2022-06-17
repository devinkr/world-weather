function AddLocationForm(props) {
	return (
		<form className='add-location'>
			<label htmlFor='location'>Enter City</label>
			<input
				type='text'
				name='location'
				id='location'
				placeholder='Enter City'
			/>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default AddLocationForm;
