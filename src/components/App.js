import React, { Component } from 'react'  // import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {id: '1',
    name: 'Kalindu',
    email: 'kalindu@gmail.com'
    },
    {id: '2',
    name: 'Viraj',
    email: 'Viraj@gmail.com'
    },
    {id: '3',
    name: 'Vishwa',
    email: 'Vishwa@gmail.com'
    },
    {id: '2',
    name: 'Malith',
    email: 'Malith@gmail.com'
    }
  ]
  
  return (
    <div clasName='ui container'>
      <Header/><br/><br/><br/>
      <AddContact/>
      {/* props pass data from parent to child */}
      <ContactList contacts={contacts}/>

    </div>
    

  );
}

export default App;
