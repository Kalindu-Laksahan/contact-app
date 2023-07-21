import React, { Component,useState,useEffect } from 'react'  // import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
   const [contacts, setContacts] = useState([]); // useState is a hook

  // const contacts = [
  //   {id: '1',
  //   name: 'Kalindu',
  //   email: 'kalindu@gmail.com'
  //   },
  //   {id: '2',
  //   name: 'Viraj',
  //   email: 'Viraj@gmail.com'
  //   },
  //   {id: '3',
  //   name: 'Vishwa',
  //   email: 'Vishwa@gmail.com'
  //   },
  //   {id: '2',
  //   name: 'Malith',
  //   email: 'Malith@gmail.com'
  //   }
  // ]
    const addContactHandler = (contact) => {
      console.log(contact);
      setContacts([...contacts, contact]);
    }

    useEffect(() => {}, [contacts]); // useEffect is a hook

  return (
    <div clasName='ui container'>
      <Header/><br/><br/><br/>
      <AddContact addContactHandler={addContactHandler}/>
      {/* props pass data from parent to child */}
      <ContactList contacts={contacts}/>

    </div>
    

  );
}

export default App;
