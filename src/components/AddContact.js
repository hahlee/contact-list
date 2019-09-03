import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddContact extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        street: '',
        suite: '',
        city: '',
        zipcode: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.name, this.state.phone, this.state.email, this.state.street, this.state.suite, this.state.city, this.state.zipcode);
        this.setState({
            name: '',
            phone: '',
            email: '',
            isFavorite: '',
            street: '',
            suite: '',
            city: '',
            zipcode: ''
        });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="First &amp; Last Name" 
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="Phone" 
                            value={this.state.phone}
                            onChange={this.onChange}
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="street"
                            placeholder="Address" 
                            value={this.state.street}
                            onChange={this.onChange}
                        />
                        <input 
                            type="text" 
                            name="suite"
                            placeholder="Address 2" 
                            value={this.state.suite}
                            onChange={this.onChange}
                        />
                        <input 
                            type="text" 
                            name="city"
                            placeholder="City" 
                            value={this.state.city}
                            onChange={this.onChange}
                        />
                        <input 
                            type="number" 
                            name="zipcode"
                            placeholder="Zip" 
                            value={this.state.zipcode}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            type="submit" 
                            value="Add Contact >"
                            className="btn btn-submit"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

// PropTypes
AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default AddContact
