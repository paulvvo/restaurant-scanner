import React from "react";
import "./RestaCardContainer.css";
//Components
import RestaCard from "../RestaCard/RestaCard";

const RestaCardContainer = (props) =>{
	// console.log(props.restaurantList);
	// console.log(typeof props.restaurantList);
	if(props.restaurantList){
		return(
			<div className="restaCardContainer">
				{
					props.restaurantList.map((item) =>{
						return <RestaCard key={item.id} restaurant={item}/>
					})
				}
			</div>
		)
	}else{
		return(
			<div className="EmptyCityParameter"> Please Enter a City <i class="far fa-angry"></i></div>
		)

	}

}

export default RestaCardContainer;
