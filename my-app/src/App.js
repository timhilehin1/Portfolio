import {React,  useEffect, useState} from "react"
import { HiMenuAlt2} from "react-icons/hi";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import {HashRouter as Router, Routes,  Route, Link, useLocation} from 'react-router-dom';
import Contact from "./Components/Contact";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineHome, AiOutlineFileProtect, AiOutlineClose} from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { FaTwitter, FaMoon} from "react-icons/fa";
import NavBar from "./Components/Navbar";




function App(){

  const [mode, setMode] = useState(JSON.parse(sessionStorage.getItem("mode")))
  const [style, setStyle] = useState(".bottom-content")
  const [pathName, setPathName] = useState("")

  // console.log(pathName)
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])

useEffect(()=>{
  if(mode){
    setStyle(".bottom-content")
  }
  else{
    setStyle(".bottom-content-lightmode")
  }
},[mode])




  function showNav(){
    document.querySelector(style).style.transform = "translateY(0%)";
  }

  function closeNav(){
    document.querySelector(style).style.transform = "translateY(1000%)"
  }
  
  return (
      <div className={mode ? "dark" : "light"}>
    <Router>
      <NavBar mode={mode}
              setMode={setMode}/>
    
   <div className="sidebar" >
    </div>

   

         <Routes>
        <Route path="/" element={<Home 
                                 mode={mode}
                                 setMode={setMode}
                                 />}/>
        <Route path="/Portfolio" element={<Portfolio
                                           mode={mode}
                                           setMode={setMode}/>}/>
        <Route path="/Contact" element={<Contact
                                           mode={mode}
                                           setMode={setMode}/>}/>
      </Routes>
    
       <>
      <footer className={ mode ?"footer text-center mt-5" : "footer-lightmode text-center mt-5"}>
    <div className="social-links d-flex gap-4 justify-content-center">
    <p className="social-icon"><a style={{color:"white"}} href="https://www.linkedin.com/in/timilehin-oladapo-919267199"><AiFillLinkedin/></a></p>
    <p className="social-icon"><a style={{color:"white"}} href="https://github.com/timhilehin1"><AiOutlineGithub/></a></p>
    <p className="social-icon"><a style={{color:"white"}} href="https://twitter.com/Timhilehin"><FaTwitter/></a></p>
  </div>
  <p style={{color:"#ffffff"}} className="text-center mt-2">&copy;2022 Oladapo Timilehin</p>
    </footer>

    <div className={ mode ? "bottom-nav menu align-items-center px-2 d-flex justify-content-between d-md-none" : "bottom-nav-lightmode menu align-items-center px-2 d-flex justify-content-between d-md-none"}>
    <h5 className="title" >OLADAPO</h5>

    <p style={{color:"#ffffff"}} onClick={showNav}><HiMenuAlt2/></p>
    </div>


     <div className={ mode ? "bottom-content px-3  mt-5 d-block d-md-none" : "bottom-content-lightmode px-3  mt-5 d-block d-md-none"}>

     <div onClick={closeNav} className="text-end mt-2 me-2 title">
     <AiOutlineClose  style={{fontSize:"1.7rem", color: mode ? "#ffffff" : "#AB8000"}}/>
     </div>

    <div className="justify-content-between mt-4 px-5 align-item-center d-flex d-md-none">

   <Link style= {{ textDecoration : "none", color: "white"}} to="/"><p onClick={closeNav} className={mode ? "title" : "title-lightmode"}>Home <span className="d-block text-center "> <AiOutlineHome style={{fontSize:"1.5rem"}}/> </span> </p></Link>

   <Link style= {{ textDecoration : "none", color: "white"}}to="/Contact"><p onClick={closeNav}  className={mode ? "title" : "title-lightmode"}>Contact <span className="d-block text-center"><MdContactPage style={{fontSize:"1.5rem"}}/></span></p> </Link>

   <Link style= {{ textDecoration : "none", color: "white"}} to="/Portfolio"><p onClick={closeNav}  className={mode ? "title" : "title-lightmode"}>Portfolio <span className="d-block text-center"><AiOutlineFileProtect style={{fontSize:"1.5rem"}}/></span></p></Link>
     </div>

    

     </div>
     </>

    </Router>
    </div>
  );
}

export default App;


