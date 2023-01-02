import {React,  useEffect, useState} from "react"
import { HiMenuAlt2} from "react-icons/hi";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import {HashRouter as Router, Routes,  Route, Link, useLocation} from 'react-router-dom';
import Contact from "./Components/Contact";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineHome, AiOutlineFileProtect, AiOutlineClose} from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { FaTwitter} from "react-icons/fa";
import NavBar from "./Components/Navbar";




function App(){

 
  const [pathName, setPathName] = useState("")

  console.log(pathName)
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])




  function showNav(){
    document.querySelector(".bottom-content").style.transform = "translateY(0%)";
  }

  function closeNav(){
    document.querySelector(".bottom-content").style.transform = "translateY(1000%)"
  }
  
  return (

    <Router>
      <NavBar/>
    
   <div className="sidebar" >

   <div  className= "text-center d-md-none gap-3">
     <Link style= {{ textDecoration : "none", color: "white"}}to="/">  <p> <AiOutlineHome/> Home</p> </Link> 
      <Link style= {{ textDecoration : "none", color: "white"}} to = "/Portfolio"><p><AiOutlineFileProtect/>Portfolio</p></Link>
      <Link style= {{ textDecoration : "none", color: "white"}} to="/Contact"><p><MdContactPage/>Contact </p></Link>
    </div>
        
    </div>

   

         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Portfolio" element={<Portfolio
                                          pathName={pathName}
                                          setPathName={setPathName} />}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    
      <footer className="footer text-center mt-5">
    <div className="social-links d-flex gap-4 justify-content-center">
    <p className="social-icon"><a style={{color:"white"}} href="https://www.linkedin.com/in/timilehin-oladapo-919267199"><AiFillLinkedin/></a></p>
    <p className="social-icon"><a style={{color:"white"}} href="https://github.com/timhilehin1"><AiOutlineGithub/></a></p>
    <p className="social-icon"><a style={{color:"white"}} href="https://twitter.com/Timhilehin"><FaTwitter/></a></p>
  </div>
  <p className="text-center mt-3">&copy;2022 Oladapo Timilehin</p>
    </footer>

    <div className="bottom-nav menu align-items-center px-2 d-flex justify-content-between d-md-none">
    <h5 className="title" >OLADAPO</h5>

    <p style={{color:"#eee8aa"}} onClick={showNav}><HiMenuAlt2/></p>
    </div>


     <div className="bottom-content px-3  mt-5 d-block d-md-none ">

     <div onClick={closeNav} className="text-end mt-2 me-2 title">
     <AiOutlineClose  style={{fontSize:"1.7rem", color:"#eee8aa"}}/>
     </div>

    <div className="justify-content-between mt-4 px-5 align-item-center d-flex d-md-none">

   <Link style= {{ textDecoration : "none", color: "white"}} to="/"><p onClick={closeNav} className="active">Home <span className="d-block text-center title"> <AiOutlineHome style={{fontSize:"1.5rem"}}/> </span> </p></Link>

   <Link style= {{ textDecoration : "none", color: "white"}}to="/Contact"><p onClick={closeNav} className="title">Contact <span className="d-block text-center"><MdContactPage style={{fontSize:"1.5rem"}}/></span></p> </Link>

   <Link style= {{ textDecoration : "none", color: "white"}} to="/Portfolio"><p onClick={closeNav} className="title">Portfolio <span className="d-block text-center"><AiOutlineFileProtect style={{fontSize:"1.5rem"}}/></span></p></Link>
     </div>

    

  

     </div>

    </Router>
  );
}

export default App;


