import React from "react";


const RestaCard = (props) =>{
	const {restaurant}  = props;
	console.log(restaurant);
	return(
		<div className="restaCard">
				<div className="iconA"><i className="fas fa-utensils"></i></div>
				<h4>{restaurant.name}</h4>
				<img src={restaurant.image_url} alt="#0"/>
				<p> Location: {restaurant.address} </p>
				<p> Price:{restaurant.price}$ </p>
		</div>
	)
}

export default RestaCard;