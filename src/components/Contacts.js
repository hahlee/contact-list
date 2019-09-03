import React, { Component } from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

class Contacts extends Component {
    render() {
        return this.props.contacts.map((contact) => (
           <ContactItem key={contact.id} contact={contact} toggleFavorite={this.props.toggleFavorite} delContact={this.props.delContact}/>
        ));
    }
}

// PropTypes
Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    markFavorite: PropTypes.func.isRequired,
    delContact: PropTypes.func.isRequired
}

export default Contacts;
