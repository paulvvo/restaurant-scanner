import React from "react";
import "./RestaCardContainer.css";
//Components
import RestaCard from "../RestaCard/RestaCard";

const RestaCardContainer = (props) =>{
	// console.log(props.restaurantList);
	// console.log(typeof props.restaurantList);
	return(
		<div className="restaCardContainer">
			{
				props.restaurantList.map((item) =>{
					return <RestaCard key={item.id} restaurant={item}/>
				})
			}
		</div>
	)
}

export default RestaCardContainer;
