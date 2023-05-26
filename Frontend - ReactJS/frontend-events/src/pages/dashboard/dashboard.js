import React, {useEffect} from 'react';
import { Outlet , useNavigate} from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate()
  /*useEffect(
    () => {
      let token = localStorage.getItem("token_events")
      if(!token){
        navigate("/login")
      }
    },[]
  )*/
  return (
    <>
    <div className='sidebar'>
      This is the sidebar.
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}


export default Dashboard