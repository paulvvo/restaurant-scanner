import React, {Component} from "react";

import "./NavBar.css";

//Components
import CityInput from "../CityInput/CityInput";

class NavBar extends Component{

	render(){
		const {onCityInputChange, onCityInputSubmit} = this.props;
		return(
			<div className="navbar">
				<div className="title">Restaurant Scanner <i className="fas fa-utensils"></i></div>
				<span className="popularCitiesNav" onClick={()=>onCityInputSubmit("Toronto")}>Toronto</span>
				<span className="popularCitiesNav" onClick={()=>onCityInputSubmit("Montreal")}>Montreal</span>
				<span className="popularCitiesNav" onClick={()=>onCityInputSubmit("Calgary")}>Calgary</span>
				<span className="popularCitiesNav" onClick={()=>onCityInputSubmit("Vancouver")}>Vancouver</span>
				<CityInput onCityInputChange={onCityInputChange} onCityInputSubmit={onCityInputSubmit}/>
			</div>
		)
	}
}

export default NavBar;
