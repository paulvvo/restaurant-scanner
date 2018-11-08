import React from "react";


const RestaCardContainer = (props) =>{
	// console.log(props.restaurantList);
	// console.log(typeof props.restaurantList);
	return(
		<div>
			{
				props.restaurantList.map((item) =>{
					return <div>test</div>
				})
			}
		</div>
	)
}

export default RestaCardContainer;
