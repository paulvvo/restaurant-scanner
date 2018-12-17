import thunk from "redux-thunk";
import {applyMiddleware, createStore, compose} from "redux";

//reducer
import RootReducer from "./Reducers/RootReducer";

const initialState={};


const store = createStore(
	RootReducer,
	initialState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	));

export default store;
