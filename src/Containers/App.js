import React, { Component } from 'react';

import './App.css';

//Components
import CityInput from "../Components/CityInput/CityInput";



class App extends Component {

	constructor(){
		super();
		this.state = {
			cityInput:"",

		}
	}
	componentDidMount(){
		fetch("http://opentable.herokuapp.com/api/restaurants?city=toronto")
		.then(response => response.json())
		.then(console.log);
	}
  render() {
    return (
      <div className="App">
				<CityInput onCityInputChange={this.onCityInputChange} onCityInputSubmit={this.onCityInputSubmit}/>
      </div>
    );
  }


	onCityInputChange = (event) =>{
		this.setState({cityInput:event.target.value});
	}
	onCityInputSubmit = (event) =>{
		fetch("http://opentable.herokuapp.com/api/restaurants?city="+this.state.cityInput)
		.then(response => response.json())
		.then(console.log);
	}
}

export default App;


//Components Planning
// need a input
// then need a list
