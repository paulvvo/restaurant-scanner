import React from "react";

//Components
import Price from "../Price/Price";
const RestaCard = (props) =>{
	const {restaurant}  = props;
	// console.log(restaurant);
	return(
		<div className="restaCard">
			<h4>{restaurant.name}</h4>
			<img src={restaurant.image_url} alt="#0" draggable="false"/>
			<p> Location: {restaurant.address} </p>
			<p> Price: {restaurant.price} <i className="fas fa-arrow-right"></i><Price price={restaurant.price}/></p>

		</div>
	)
}

export default RestaCard;
