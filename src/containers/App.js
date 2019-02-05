import React, { Component } from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component {
	constructor() {
		super()
		this.state = {
			contacts: [],
			searchfield: ''
		}
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ contacts: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render() {
		const {contacts, searchfield } = this.state;
		const filteredContacts = contacts.filter(contact => {
			return contact.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !contacts.length ?
		<h1>Loading...</h1> :
		(
			<div className='tc'>
				<h1>Contacts</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList contacts ={filteredContacts}/>
				</Scroll>
			</div>
		);
	}
}

export default App;