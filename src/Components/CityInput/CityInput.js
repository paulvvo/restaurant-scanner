import React from "react";


const CityInput = (props) => {
	return(
		<div>
			<input type="text" placeholder="Enter in a city" onChange={props.onCityInputChange}/>
			<button>Gooooo!</button>
		</div>
	)
}

export default CityInput;
