import React from "react";
import { useLocation, Link } from "react-router-dom";

function NavBar(){

    let location = useLocation().pathname
    console.log(location)
    return (
      <>
<nav className="nav-menu justify-content-between align-items-center d-flex">
   <Link style={{textDecoration : "none", color: "white"}} to="/"><h5  className="active" style={{}}>OLADAPO</h5></Link> 

    <div className="d-none d-md-flex  gap-3">
     <Link style= {{ textDecoration : "none", }}to="/"> <p className={location === "/" ? "active" : "title"} >Home</p> </Link> 
      <Link style= {{ textDecoration : "none", color: "white"}} to = "/Portfolio"><p className={location === "/Portfolio" ? "active" : "title"}>Portfolio</p></Link>
      <Link style= {{ textDecoration : "none", color: "white"}} to="/Contact"><p className={location === "/Contact" ? "active" : "title"}>Contact </p></Link>
    </div>

    <div className="d-block menu d-md-none">
      {/* <HiMenuAlt2/> */}
    </div>

    

    {/* <div onClick={CloseBtn} className="d-block menu d-md-none">
      <AiOutlineClose/>
    </div> */}
   </nav>
     </>
    )
}

export default NavBar