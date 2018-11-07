import React, { Component } from 'react';

import './App.css';

class App extends Component {


	componentDidMount(){
		fetch("http://opentable.herokuapp.com/api/restaurants?city=toronto")
		.then(response => response.json())
		.then(console.log);
	}
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
