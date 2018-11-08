import React from "react";


const CityInput = (props) => {
	const {onCityInputChange, onCityInputSubmit} = props;

	const onEnterKeyPress = (event) =>{
		if(event.key ==="Enter")
			onCityInputSubmit();


	}

	return(
		<div className="search">
			<input type="text" placeholder="Enter in a city" onChange={onCityInputChange} onKeyPress={onEnterKeyPress} required/>
			<button onClick={onCityInputSubmit}>GO <i className="fas fa-angle-double-right"></i></button>
		</div>
	)


}

export default CityInput;
