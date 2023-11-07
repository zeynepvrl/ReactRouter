import React from 'react'
import { useNavigate } from 'react-router-dom' 

function Home() {
  const navigate =useNavigate();
  return (
    <>
    <div>Home</div>
    <button onClick={()=>navigate('/mission')} >Mission Yönlendirme</button>
    </>
  );
}

export default Home