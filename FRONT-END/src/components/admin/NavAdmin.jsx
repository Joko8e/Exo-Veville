import React from 'react'
import { Link } from 'react-router-dom'

const NavAdmin = () => {


  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='agence'>Agence</Link>
            </li>
            <li>
                <Link to='vehicule'>Vehicule</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavAdmin