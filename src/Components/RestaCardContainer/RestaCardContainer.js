import React from "react";

//Components
import RestaCard from "../RestaCard/RestaCard";

const RestaCardContainer = (props) =>{
	// console.log(props.restaurantList);
	// console.log(typeof props.restaurantList);
	return(
		<div>
			{
				props.restaurantList.map((item) =>{
					return <RestaCard key={item.id} restaurant={item}/>
				})
			}
		</div>
	)
}

export default RestaCardContainer;
