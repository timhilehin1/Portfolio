import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {  FaMoon} from "react-icons/fa";
import {MdLightMode} from "react-icons/md";

function NavBar(prop){

    const{mode, setMode} = prop

    function setTheme(){
      setMode(!mode) 
      sessionStorage.setItem("mode", !mode)
    }


    let location = useLocation().pathname
    return (
      <>
<nav className={mode ? "nav-menu justify-content-between align-items-center d-flex" : "nav-menu-lightmode justify-content-between align-items-center d-flex"}>
   <Link style={{textDecoration : "none", color: "white"}} to="/"><h5  className="active" style={{}}>OLADAPO</h5></Link> 

    <div className="d-none d-md-flex  gap-3">
     <Link style= {{ textDecoration : "none", }}to="/"> <p className={location === "/" ? "active" : "title"} >Home</p> </Link> 
      <Link style= {{ textDecoration : "none", color: "white"}} to = "/Portfolio"><p className={location === "/Portfolio" ? "active" : "title"}>Portfolio</p></Link>
      <Link style= {{ textDecoration : "none", color: "white"}} to="/Contact"><p className={location === "/Contact" ? "active" : "title"}>Contact </p></Link>
      <p className={mode ? "d-none" : "d-block"}  onClick={setTheme} style={{color:"white", fontSize:"1.4rem"}}><FaMoon/></p>
      <p className={mode ? "d-block" : "d-none"} onClick={setTheme} style={{color:"white", fontSize:"1.6rem"}}><MdLightMode/></p>
    </div>

    <div className="d-block menu d-md-none">
      
      <p  className={mode ? "d-none" : "d-block"}   onClick={setTheme} style={{color:"white", fontSize:"1.4rem"}}><FaMoon/></p>
      <p  className={mode ? "d-block" : "d-none"} onClick={setTheme}  style={{color:"white", fontSize:"1.6rem"}}><MdLightMode/></p>
    </div>

    
   </nav>
     </>
    )
}

export default NavBar