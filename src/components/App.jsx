import React, { Component } from 'react';
import { ContactList } from './contacts/ContactList';
import { Filter } from './contacts/Filter';
import ContactForm from './contacts/ContactForm';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as css from './contacts/contacts.styled';
import { nanoid } from 'nanoid'


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }


  componentDidMount() {
    const { contacts } = this.state
    
    const local = JSON.parse(localStorage.getItem('Contact_List'));
    this.setState({ contacts: local })

    if (!local || +local === 0) {
      this.setState({ contacts })
    }
  
  }


  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('Contact_List', JSON.stringify(contacts))
    }
  }

  addContact = (contact) => {
    if (this.checkDuplicates(contact.name)) {
      return;
    }
    this.setState((prevState) => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts]
    }));
  }


  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }

  checkDuplicates = (inputName) => {
    const { contacts } = this.state;

    let duplicate = false;

    Object.values(contacts).map((el) => {
      if (el.name.toLocaleLowerCase().includes(inputName.toLocaleLowerCase())) {
        Notify.failure(`${el.name} is already in contacts.`);
        duplicate = true;
      }
      return duplicate;
    })

    return duplicate;
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  resultFilter = () => {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact => (
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ));

  }

  renderContact = (array) => {
    return array.map((contact) => (
      <li key={contact.id}>{contact.name}: {contact.number}
        <button type='button' onClick={() => this.deleteContact(contact.id)}>Delete</button>
      </li>
    ))
  }


  render() {
    return (
      <css.DivAll>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} />
        <ContactList filter={this.resultFilter()} render={this.renderContact} />
      </css.DivAll>
    )

  }
};



export default App;