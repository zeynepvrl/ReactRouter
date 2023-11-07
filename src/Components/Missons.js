import React from 'react'
import { useNavigate } from 'react-router-dom'

function Missons() {
    const navigate= useNavigate()
  return (
    <>
     <div>Missons</div>
     <button onClick={()=>navigate('/')}>Geri</button>  {/*  Home un dizini yerine -1 de yazabilirdin */}
    </>
  )
}

export default Missons