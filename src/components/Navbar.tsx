import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Accueil</Link></li>
        <li><Link to='/about'>A propos</Link></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
