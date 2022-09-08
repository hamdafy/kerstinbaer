import React, { useEffect, useState } from 'react'
import {Link,Navigate,useLocation, useNavigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import './header.css'
import {FiMenu } from "react-icons/fi";

const Header = () => {
    const { logOut, user } = useUserAuth();
  const handleLogout = async () => {
    if(window.confirm("willst  du dich wirklich ausloggen  ")){

    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
     
  }

  }
  const [activeTab , setactiveTab] = useState("Home")
  const location = useLocation();
  const navigate = useNavigate()
  useEffect(()=>{
    if(location.pathname === '/'){
        setactiveTab("Home")
    }
    else if(location.pathname === '/add'){
        setactiveTab("AddStudent")
    }
    else if(location.pathname === '/about'){
        setactiveTab("About")
    }
  },[location])
  return (
<div className='header'>
 
        <Link to = '/home'> 
        
        <p className='logo'>Kerstin bär</p>
         </Link>
     
        
        <div className='header-right'>
           
     

        <Link to = '/Tabelle'> 
        <p className={`${activeTab==="Home" ? 'active':""}`}
        onClick ={()=>setactiveTab('Home')}>Home</p>
         </Link>
        

         <Link to = '/add'> 
        <p className={`${activeTab==="AddStudent" ? 'active':""}`}
        onClick ={()=>setactiveTab('AddStudent')}>Add costs</p>
         </Link>
         

         
         <p onClick={handleLogout} >log out </p>
      
        </div>
     view
    </div>
  )
}

export default Header
