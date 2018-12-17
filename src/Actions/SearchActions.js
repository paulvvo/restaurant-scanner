import {GET_CITIES, GET_CITIES_ERRORS, GET_CITIES_PENDING} from "./constants";

export const getCities = (cityInput) => dispatch =>{
	dispatch({
		type:GET_CITIES_PENDING,
		payload:{}
	})

	fetch("http://opentable.herokuapp.com/api/restaurants?city="+cityInput)
	.then(response => response.json())
	.then(dataObject => {
		dispatch({
			type:GET_CITIES,
			payload:dataObject.restaurants,
		})
	})
	.catch(err => {
		dispatch({
			type:GET_CITIES_ERRORS,
			payload:err,
		})
	});
}
