import React from "react";


const CityInput = (props) => {
	const {onCityInputChange, onCityInputSubmit} = props;
	return(
		<div>
			<input type="text" placeholder="Enter in a city" onChange={onCityInputChange} required/>
			<button onClick={onCityInputSubmit}>Gooooo!</button>
		</div>
	)
}

export default CityInput;
