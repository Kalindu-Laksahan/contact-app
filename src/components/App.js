import React, { Component } from 'react'  // import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  return (
    <div>
      <Header/><br/><br/><br/>
      <AddContact/>
      <ContactList/>

    </div>
    

  );
}

export default App;
