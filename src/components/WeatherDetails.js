import { useEffect, useState } from 'react';
import ForecastDay from './ForecastDay';

function WeatherDetails({ time, weatherDetails }) {
	// State to hold background image information
	const [bgImage, setBgImage] = useState(null);

	//Set background image whenever WeatherDetails changes
	useEffect(() => {
		if (weatherDetails) {
			const url = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASHAPI_KEY}&query=${weatherDetails.location.name}&orientation=landscape`;
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					document.body.style.backgroundImage = `url('${data.urls.regular}')`;
					setBgImage({
						link: data.links.html,
						artist: data.user.name,
					});
				});
		}
	}, [weatherDetails]);

	if (!weatherDetails) {
		return;
	}
	return (
		<main className='weatherdetails'>
			<div className='weatherdetails-heading'>
				<div>
					<h2>{weatherDetails.location.name}</h2>
					<div className='weatherdetails-date'>
						{time.toLocaleDateString([], {
							weekday: 'short',
							day: 'numeric',
							month: 'long',
							year: 'numeric',
							timeZone: weatherDetails.location.tz_id,
						})}
					</div>
					<div className='weatherdetails-time'>
						{time.toLocaleTimeString([], {
							hour: 'numeric',
							minute: 'numeric',
							timeZone: weatherDetails.location.tz_id,
							timeZoneName: 'short',
						})}
					</div>
				</div>

				<div className='weatherdetails-temp'>
					{weatherDetails.current.temp_f}°
				</div>
			</div>
			<div className='forecast'>
				<ForecastDay forecastData={weatherDetails.forecast.forecastday[0]} />
				<ForecastDay forecastData={weatherDetails.forecast.forecastday[1]} />
				<ForecastDay forecastData={weatherDetails.forecast.forecastday[2]} />
			</div>
			<div className='footer'>
				&copy; 2022 Devin Raleigh | Powered by{' '}
				<a href='https://www.weatherapi.com/' title='Free Weather API'>
					WeatherAPI.com
				</a>{' '}
				{bgImage ? (
					<span>
						| Photo by <a href={bgImage.link}>{bgImage.artist}</a> on{' '}
						<a href='https://unsplash.com/?utm_source=world_weather&utm_medium=referral'>
							Unsplash
						</a>
					</span>
				) : null}
			</div>
		</main>
	);
}

export default WeatherDetails;
