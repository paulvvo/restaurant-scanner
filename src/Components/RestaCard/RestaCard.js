import React from "react";


const RestaCard = (props) =>{
	const {restaurant}  = props;
	return(
		<div>
			{
				restaurant.name
			}
		</div>
	)
}

export default RestaCard;
