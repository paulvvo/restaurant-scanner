import React, { Component } from 'react';

import './App.css';

//Components
import NavBar from "../Components/NavBar/NavBar";
import RestaCardContainer from "../Components/RestaCardContainer/RestaCardContainer";	

class App extends Component {
	constructor(){
		super();
		this.state = {
			cityInput:"",
			restaurantList:[],
		}
	}
  render() {
    return (
      <div className="App">
				<NavBar onCityInputChange={this.onCityInputChange} onCityInputSubmit={this.onCityInputSubmit}/>
				<RestaCardContainer restaurantList={this.state.restaurantList}/>
      </div>
    );
  }
	onCityInputChange = (event) =>{
		this.setState({cityInput:event.target.value});
	}
	onCityInputSubmit = (city) =>{
		typeof city === 'string'
		? this.restaurantCityFetch(city)
		: this.restaurantCityFetch(this.state.cityInput)
	}
	restaurantCityFetch = (stringCityName) =>{
		fetch("http://opentable.herokuapp.com/api/restaurants?city="+stringCityName)
		.then(response => response.json())
		.then(dataObject => {
			this.setState({restaurantList:dataObject.restaurants})
		})
		.catch(err => console.log(err,"restaurant fetch error"));
	}
}

export default App;
