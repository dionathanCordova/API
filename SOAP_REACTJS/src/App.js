import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	render() {

		fetch('http://localhost/Pessoal/FACULDADE/ATIVIDADE_SOAP/cliente/cliente.php')
		.then((r) => r.json())
		.then((response) => {
			console.log(response);
		})
	 
		return (	
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Edit <code>src/App.js</code> and save to reload. </p>
				</header>
			</div>
		);	
	}
}

export default App;
