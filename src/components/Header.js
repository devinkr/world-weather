function Header({ units, setUnits }) {
	return (
		<header>
			<h1>World Weather</h1>
			<div className='units'>
				<button
					onClick={() => setUnits('f')}
					disabled={units === 'f'}
					aria-label='Set units to Fahrenheit'>
					F
				</button>
				<button
					onClick={() => setUnits('c')}
					disabled={units === 'c'}
					aria-label='Set units to Celsius'>
					C
				</button>
			</div>
		</header>
	);
}
export default Header;
