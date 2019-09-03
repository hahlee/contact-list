import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export class ContactItem extends Component {
    state = {
        isDetailVisible: false
    };

    toggleDetail = () => {
        this.setState(prevState => ({ isDetailVisible: !prevState.isDetailVisible }));
    };

    render() {
        const { id, name, phone, email, address } = this.props.contact;
        const { isDetailVisible } = this.state;

        return (
            <div className="contact">
                <input type="checkbox" onChange={this.props.toggleFavorite.bind(this, id)} />
                <p>{ name }</p>
                <button onClick={this.props.delContact.bind(this, id)} className="btn btn-del">DELETE</button>
                <button onClick={this.toggleDetail} className="details-link">Details</button>
                <div className={`details ${isDetailVisible ? "" : "hidden"}`}>
                    <div>
                        <p><strong>Phone:</strong> { phone }</p>
                        <p><strong>Email:</strong> { email }</p>
                    </div>
                    <div>
                        <p><strong>Address:</strong> { address.street }</p>
                        <p><strong>Address 2:</strong> { address.suite }</p>
                        <p><strong>City:</strong> { address.city }</p>
                        <p><strong>Zip:</strong> { address.zipcode }</p>
                    </div>
                </div>
            </div>
        )
    }
}

// PropTypes
ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
    markFavorite: PropTypes.func.isRequired,
    delContact: PropTypes.func.isRequired
}

export default ContactItem
