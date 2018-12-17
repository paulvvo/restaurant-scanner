import React, {Component} from "react";
import {connect} from "react-redux";

import "./NavBar.css";
//actions
import {getCities} from "../../Actions/SearchActions";

//Components
import CityInput from "../CityInput/CityInput";

class NavBar extends Component{

	render(){
		const {onCityInputChange, onCityInputSubmit} = this.props;
			console.log(this.props.search);
		return(
			<div className="navbar">
				<div className="title">Restaurant Scanner <i className="fas fa-utensils"></i></div>
				<span className="popularCitiesNav" onClick={()=>this.props.getCities('Toronto')}>Toronto</span>
				<span className="popularCitiesNav" onClick={()=>onCityInputSubmit("Montreal")}>Montreal</span>
				<span className="popularCitiesNav" onClick={()=>onCityInputSubmit("Calgary")}>Calgary</span>
				<span className="popularCitiesNav" onClick={()=>onCityInputSubmit("Vancouver")}>Vancouver</span>
				<CityInput onCityInputChange={onCityInputChange} onCityInputSubmit={onCityInputSubmit}/>
			</div>
		)
	}
}
const mapStateToProps = (state) =>{
	return{
		search:state.SearchReducer
	}
}

export default connect(mapStateToProps, {getCities})(NavBar);



// <span className="popularCitiesNav" onClick={()=>onCityInputSubmit("Toronto")}>Toronto</span>
