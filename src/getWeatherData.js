export default function getWeatherData(location, setLocationData) {
	const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${location}&days=3&aqi=no&alerts=no`;
	fetch(url, { crossDomain: true, mode: 'cors' })
		.then((res) => res.json())
		.then((data) => {
			console.log(`Fetching: ${location}`);
			setLocationData(data);
		})
		.catch((err) => console.error(err));
}
