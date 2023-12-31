import React, { Component } from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return (
            // <div className='item'>
            //     <div className='content'>
            //         <div className='header'>{contact.name}</div>
            //         <div>{contact.email}</div>
            //     </div>
            //     <i className='trash alternate outline icon'
            //         style={{ color: 'red', marginTop: '7px' }}
            //     ></i>
            // </div>
            <ContactCard contact={contact} />
        );
    });

    return (
        <div className='ui celled list'>
            {renderContactList}
            {/* time 23.21 */}
        </div>
    );

}

export default ContactList;
