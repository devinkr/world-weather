// Helper function that fetches weather data for given location and then runs the callback method with the returned data.

export default function getWeatherData(location, callBack) {
	const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${location}&days=3&aqi=no&alerts=no`;
	fetch(url, { crossDomain: true, mode: 'cors' })
		.then((res) => {
			if (res.status === 404 || res.status === 400) {
				return {
					error: `No results found for ${location}. Please try another search`,
				};
			} else if (res.status === 200) {
				return res.json();
			}
		})
		.then((data) => {
			callBack(data);
		})
		.catch((err) => {
			callBack({ error: 'There was a problem. Please try again later.' });
		});
}
