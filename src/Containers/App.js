import React, { Component } from 'react';

import './App.css';

//Components
import CityInput from "../Components/CityInput/CityInput";



class App extends Component {


	componentDidMount(){
		fetch("http://opentable.herokuapp.com/api/restaurants?city=toronto")
		.then(response => response.json())
		.then(console.log);
	}
  render() {
    return (
      <div className="App">
				<CityInput/>
      </div>
    );
  }
}

export default App;


//Components Planning
// need a input
// then need a list
