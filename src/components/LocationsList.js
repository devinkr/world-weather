import LocationItem from './LocationItem';

function LocationsList(props) {
	return (
		<div className='locations-list'>
			Locations List
			<LocationItem />
			<LocationItem />
			<LocationItem />
			<LocationItem />
		</div>
	);
}

export default LocationsList;
