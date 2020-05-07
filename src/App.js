import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>{this.setState({robots: users})});
	}

	OnSearchChange=(event)=>{
		this.setState({ searchField: event.target.value})
	}

	render(){
		const filteredrobots= this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if(this.state.robots.lenght===0){
			return <h1>Loading</h1>
		}
		else {
			return(
				<div className='tc'>
					<h1 className= 'f1'>RoboFriends</h1>
					<SearchBox searchChange={this.OnSearchChange}/>
					<Scroll>
						<CardList robots={filteredrobots}/>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;