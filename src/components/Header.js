function Header({ units, setUnits }) {
	return (
		<header>
			<h1>World Weather</h1>
			<div className='units'>
				<button
					onClick={() => {
						setUnits('f');
						const worldWeatherLocal = JSON.parse(
							localStorage.getItem('worldWeatherLocal')
						);
						localStorage.setItem(
							'worldWeatherLocal',
							JSON.stringify({
								...worldWeatherLocal,
								units: 'f',
							})
						);
					}}
					disabled={units === 'f'}
					aria-label='Set units to Fahrenheit'>
					F
				</button>
				<button
					onClick={() => {
						setUnits('c');
						const worldWeatherLocal = JSON.parse(
							localStorage.getItem('worldWeatherLocal')
						);
						localStorage.setItem(
							'worldWeatherLocal',
							JSON.stringify({
								...worldWeatherLocal,
								units: 'c',
							})
						);
					}}
					disabled={units === 'c'}
					aria-label='Set units to Celsius'>
					C
				</button>
			</div>
		</header>
	);
}
export default Header;
