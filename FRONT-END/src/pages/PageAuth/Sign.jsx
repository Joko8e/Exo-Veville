import React from 'react'
import { useState } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
import { useContext } from 'react';

const Sign = () => {

    const{ login } = useContext(AuthContext)
    const[user, setUser] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser ((user) => ({...user, [name]: value}));
    }

    const handleSubmit = () => {
        login(user)
    }

  return (
    <div>Sign

        <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='email' onChange={handleChange}/>
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Password' onChange={handleChange} />
            <button>Sign</button>
        </form>
    </div>

  )
}

export default Sign