import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as css from './contacts.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    addNameNumber = (e) => {
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }

    addContact = () => {
        const { name, number } = this.state;

        const contact = {
            name,
            number,
        }

        if (name === '' || number === '') {
            Notify.failure(`Enter the contact's name and phone number.`);
            return;
        }

        this.props.addContact(contact);

        this.setState({
            name: '',
            number: ''
        });

    }

    render() {
        const { name, number } = this.state;
        return (
            <css.DivContactForm>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={this.addNameNumber}
                        required
                    />
                </label>
                <label htmlFor="number">Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={this.addNameNumber}
                        required
                    /></label>
                <button type='button' onClick={this.addContact}>Add contact</button>
            </css.DivContactForm>
        )
    }

}


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};

export default ContactForm;