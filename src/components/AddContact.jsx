import React, { Component } from 'react' 

class AddContact extends Component {
    state = {  } 
    render() { 
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <div className='ui form'>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name' />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' />
                    </div>
                    <div>
                        <button className='ui button blue'>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AddContact;