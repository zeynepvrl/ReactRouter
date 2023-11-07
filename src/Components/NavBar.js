import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>                                                 {/* Link i import edip kullanmak yerine NavLink i ekledik çünkü active özelleğini ve css ini kullanabilmek için */}
        <NavLink to="/" >HOME</NavLink>                   {/*  linkler html de a etiketi olarak görünür */}
        <NavLink to="/aboutus" >ABOUT</NavLink>           {/* Buradaki to nun ile router daki path kısmı eşleşmeli */}
        <NavLink to="/history" >HİSTORY</NavLink>
        <NavLink to="members" >Members</NavLink>
    </nav>
  );
}

export default NavBar