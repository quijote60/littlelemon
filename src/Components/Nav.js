import React from 'react'


const Nav = () => {
  return (
    <nav className='navbar background'>   
      <img src='/Logo.svg'></img>
      <ul className='nav-list'>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">About</a></li>
  <li><a href="#contact">Menu</a></li>
  <li><a href="#reservations">Reservations</a></li>
  <li><a href="#orderOnline">Order Online</a></li>
  <li><a href="#login">Login</a></li>
</ul>
    </nav>
  )
}

export default Nav
