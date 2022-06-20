// Helper function that fetches weather data for given location and then runs the callback method with the returned data.

export default function getWeatherData(location, setLocationData) {
	const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${location}&days=3&aqi=no&alerts=no`;
	fetch(url, { crossDomain: true, mode: 'cors' })
		.then((res) => res.json())
		.then((data) => {
			setLocationData(data);
		})
		.catch((err) => console.error(err));
}
