import React, {Component} from "react";

import "./NavBar.css";

//Components
import CityInput from "../CityInput/CityInput";

class NavBar extends Component{

	render(){
		const {onCityInputChange, onCityInputSubmit} = this.props;
		return(
			<div className="navbar">
				<CityInput onCityInputChange={onCityInputChange} onCityInputSubmit={onCityInputSubmit}/>
			</div>
		)
	}
}

export default NavBar;
