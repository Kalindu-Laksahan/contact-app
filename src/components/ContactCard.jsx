import React, { Component } from 'react'

const ContactCard = (props) => {

    const{ id, name, email } = props.contact;
    return (
        <div className='item'>
                <img className='ui avatar image' src='https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png' />
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                <i className='trash alternate outline icon'
                    style={{ color: 'red', marginTop: '7px' }}
                ></i>
        </div>
    );
}

export default ContactCard;