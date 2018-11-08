import React, { Component } from 'react';

import './App.css';

//Components
import CityInput from "../Components/CityInput/CityInput";
import RestaCardContainer from "../Components/RestaCardContainer/RestaCardContainer";



class App extends Component {

	constructor(){
		super();
		this.state = {
			cityInput:"",
			restaurantList:[],
		}
	}
	componentDidMount(){
		fetch("http://opentable.herokuapp.com/api/cities")
		.then(response => response.json())
		.then(data => console.log("componentDidMount",data));
	}
  render() {
    return (
      <div className="App">
				<CityInput onCityInputChange={this.onCityInputChange} onCityInputSubmit={this.onCityInputSubmit}/>
				<RestaCardContainer restaurantList={this.state.restaurantList}/>
      </div>
    );
  }


	onCityInputChange = (event) =>{
		this.setState({cityInput:event.target.value});
	}
	onCityInputSubmit = (event) =>{
		fetch("http://opentable.herokuapp.com/api/restaurants?city="+this.state.cityInput)
		.then(response => response.json())
		.then(dataObject => {
			// console.log(typeof dataObject.restaurants);
			// console.log(dataObject.restaurants);
			this.setState({restaurantList:dataObject.restaurants})
		});
	}
}

export default App;


//Components Planning
// need a input
// then need a list
