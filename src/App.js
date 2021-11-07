import { useEffect, useState } from "react";
import shortid from 'shortid';

import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from "./components/Filter";
import styles from './App.module.css';

const arrContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


export default function App() {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? arrContacts);

  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    console.log('useEffect');
    window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const addNewContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number
    }
    setContacts(prevState => [...prevState, contact])
  }

  const deleteContact = (contactId) => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    )
  }

  const getFilterName = event => {
    setFilterName(event.currentTarget.value);
  }

  const resetFiler = () => {
    setFilterName('');
  }

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };


  return (
    <>
      <div className={styles.container}>
        <div className={styles.phonebook}>
          <h1 className={styles.title}>Phonebook</h1>
          <Form contacts={contacts} addNewContact={addNewContact} />

          <h2 className={styles.titleContacts}>Contacts</h2>
          <Filter value={filterName} onChange={getFilterName} resetFiler={resetFiler} />
          <Contacts contacts={visibleContacts()} onDeleteContact={deleteContact} />

        </div>
      </div>
    </>

  )
}
