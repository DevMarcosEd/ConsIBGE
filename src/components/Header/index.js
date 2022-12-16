import React from 'react'
import { Link } from 'react-router-dom'; 
import './style.css'

export default function Header() {

  return (
    <header className='header-Container'>
        <div className='navbar'>
        <Link to='/'>
           <span>IBGE API consumption</span>
        </Link>
        </div>
    </header>
  )
}
