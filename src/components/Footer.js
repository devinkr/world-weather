import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';

function Footer({ bgImage }) {
	let unSplashInfo;
	return (
		<footer>
			<div>
				Powered by{' '}
				<a href='https://www.weatherapi.com/' title='Free Weather API'>
					WeatherAPI.com
				</a>
			</div>
			<div>&copy;2022 Devin Raleigh</div>
			{bgImage ? (
				<div>
					Background image by <a href={bgImage.link}>{bgImage.artist}</a>
				</div>
			) : null}
		</footer>
	);
}

export default Footer;
