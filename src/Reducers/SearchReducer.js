const {GET_CITIES, GET_CITIES_PENDING, GET_CITIES_ERRORS} = "../Actions/constans";

const initialState = {
	restaurantList:[],
	errors:{}
};

export default (state=initialState, action) =>{
	switch(action.type){
		case GET_CITIES:
			return {
				...state,
				restaurantList:action.payload,
			}
		case GET_CITIES_PENDING:
			return{
				...state,
				restaurantList:[]
			}
		case GET_CITIES_ERRORS:
			return{
				...state,
				errors:action.payload,
			}
		default:
			return state;
	}
}
