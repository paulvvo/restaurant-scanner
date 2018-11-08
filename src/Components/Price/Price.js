import React from "react";

const Price  = (props) => {

	const arr = [];
	for(var i=0; i<props.price; i++){
		arr.push("");
	}
	return (
		arr.map((item,i) => {
			return <i key={i} className="fas fa-money-bill-wave priceIcon"></i>
		})
	)
}

export default Price;
