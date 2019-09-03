import React, { Component } from 'react';
import Header from './components/Layout/Header';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import axios from 'axios';

import './App.css';

export class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=15')
      .then(res => this.setState({ contacts: res.data }));
  }

  // Toggle Favorite
  toggleFavorite = (id) => {
    this.setState({ contacts: this.state.contacts.map(contact => {
      if(contact.id === id) {
        contact.isFavorite = !contact.isFavorite
      }
      return contact;
    }) });
  }

  // Delete Contact
  delContact = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => this.setState({ contacts: [...this.state.contacts.filter(contact => contact.id !== id)] }));
  }

  // Add Contact
  addContact = (name, phone, email, street, suite, city, zipcode) => {
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name,
      phone,
      email,
      address: {
        street,
        suite,
        city,
        zipcode
      },
      isFavorite: false
    })
      .then(res => this.setState({ contacts: [...this.state.contacts, res.data] }) );
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header />
            <React.Fragment>
              <AddContact addContact={this.addContact}/>
              <Contacts contacts={this.state.contacts} toggleFavorite={this.toggleFavorite} delContact={this.delContact}/>
            </React.Fragment>
          </div>
        </div>
    );
  }
}

export default App;
