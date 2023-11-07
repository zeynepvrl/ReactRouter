import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function History() {
  return (
    <>
    <div>History</div>
    <nav className='HistoryNav'>
        <Link to="company" >Our Company</Link>     {/* burada url e / kendiliğinden eklenir, yazılmamalı */}
        <Link to="team" >Team</Link>
    </nav>
    <Outlet></Outlet>                              {/* nested route olduğu bilgisi verir, aksi durumda sadece url de içe içelik oluşur */}
    </>
  )
}

export default History