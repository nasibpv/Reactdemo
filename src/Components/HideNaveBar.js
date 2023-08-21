import {React,useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
function HideNaveBar({children}) {
const location=useLocation()
const [showNavBar,setShowNavBar]=useState(false)
useEffect(()=>{
    //? get current path
    // console.log('this is locatin', location.pathname);
    if(location.pathname==='/addcart'){
        setShowNavBar(false)
    }
    else{
        setShowNavBar(true)
    }
},[location])

  return (
    <div>{showNavBar && children}</div>
  )
}

export default HideNaveBar