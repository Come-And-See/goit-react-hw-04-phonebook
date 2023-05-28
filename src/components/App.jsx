import React, { useState, useEffect, useRef } from 'react';
import { ContactList } from './contacts/ContactList';
import { Filter } from './contacts/Filter';
import ContactForm from './contacts/ContactForm';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as css from './contacts/contacts.styled';
import { nanoid } from 'nanoid'




const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('Contact_List'))
  });

  const [filter, setFilter] = useState('');
  const itFirstRender = useRef(true);

  useEffect(() => {
    if (itFirstRender.current) {
       itFirstRender.current = false;
      if (contacts.length === 0) {
        setContacts([
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ])
      }
      return;
    }

    localStorage.setItem('Contact_List', JSON.stringify(contacts))
  }, [contacts]);



  const checkDuplicates = (inputName) => {
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



  const addContact = (contact) => {
    if (checkDuplicates(contact.name)) {
      return;
    };

    setContacts(contacts => [{ id: nanoid(), ...contact }, ...contacts]);
  }



  const deleteContact = (id) => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id))
  }




  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }


  const resultFilter = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact => (
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ));
  }




  return (
    <css.DivAll>
      <h1>Phonebook</h1>
      <ContactForm addContactList={addContact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      <ContactList data={resultFilter()} deleteContact={deleteContact} />
    </css.DivAll>
  )


};



export default App;
