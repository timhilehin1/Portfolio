import { React, useRef, useState, useEffect } from "react";
import { HiMenuAlt2, HiOutlineDownload } from "react-icons/hi";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineCalendar, AiOutlineArrowRight, AiOutlineMobile } from "react-icons/ai";
import { SlGraduation} from "react-icons/sl";
import { FaTwitter} from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import image1 from "../images/plain.png"
import image2 from "../images/home-img.png";
import {Link} from 'react-router-dom';
import CV from "../images/TIMICV.pdf"
// import iii from "../images/OLADAPO_TMILEHIN_CV_1.pdf"

function Home(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const [section, setSection] = useState(false)
    
    const work = useRef()
  const education = useRef()

  function displayWork(){
    education.current.style.display = "none"
    work.current.style.display = "flex"
    setSection(!section)
  }

  function displayEducation(){
    work.current.style.display = "none"
    education.current.style.display = "flex"
    setSection(!section)
  }


    return (

        <>
         <div className="App">


             
    <main className="main">

    

    <div className="intro d-flex gap-5 gap-lg-0 justify-content-lg-between">
  <div className="social-links d-block">
    <p className="social-icon"><a style={{color:"white"}} href="https://www.linkedin.com/in/timilehin-oladapo-919267199"><AiFillLinkedin/></a></p>
    <p className="social-icon"><a style={{color:"white"}} href="https://github.com/timhilehin1"><AiOutlineGithub/></a></p>
    <p className="social-icon"><a style={{color:"white"}} href="https://twitter.com/Timhilehin"><FaTwitter/></a></p>
  </div>

  <div className="intro-text d-none d-md-block">
    <h3 style={{fontWeight:"600"}}>Hi, I'm Timilehin</h3>
    <p  style={{fontWeight:"600"}}>Front-end Developer</p>

    <p>With real and true love for responsive and beautiful interface websites.</p>

 <Link to="/Contact"><button className="contact-btn">Contact me <TbSend/></button></Link> 
  </div>

  <div className="image ms-5 ms-lg-0">
    {/* <img className="img-fluid" alt="" src={image1}/> */}
    <img className="img-fluid" alt="" src={image2}/>
  </div>
    </div>

    <div className="intro-text d-block d-md-none">
    <h3 style={{fontWeight:"600"}}>Hi, I'm Timilehin</h3>
    <p style={{fontWeight:"600"}}>Front-end Developer</p>

    <p>With real and true love for responsive and beautiful interface websites.</p>

    <Link to="/Contact"><button className="contact-btn">Contact me <TbSend/></button></Link> 
  </div>

    <div className="about-me mt-5">
      <h4 style={{fontWeight:"600"}} className="text-center mt-5">About me</h4>
      <h5 style={{fontWeight:"600"}} className="text-center">Introduction to Timiverse</h5>

      <div className="details d-block d-lg-flex  justify-content-between">
        <div className="profile-img">
        <img className="img-fluid profile-img  image  ms-lg-5" alt="" src={image1} />
        </div>

        <div className="mt-3 text-center text-box text-center text-lg-center test">
          <p>I get fascinated when i see how things work behind the scenes in any given field. This has fueled me in my Tech Journey to be inquisitive about new things and to develop a learning mentality.</p>

          <div className="experience text-center  mt-5 d-flex justify-content-center gap-lg-5 gap-3">
           <div className=""> <h6 className="text-center sec">01+ <span className="d-block text-center"> Years </span> Experience </h6> </div>
           <div className="">  <h6 className="text-center sec">06+ <span className="d-block text-center"> Projects </span> Completed </h6> </div>
           <div className=""><h6 className="text-center sec">02+ <span className="d-block text-center"> Companies </span> worked </h6> </div> 
          </div>

          <div className="text-center  mt-4">
          <a download="TIMICV.pdf" href={CV}><button  className="download contact-btn">Download CV <HiOutlineDownload/></button></a>
          </div>
        </div>

      </div>

    </div>


    <div  className="qualfications mt-5">
      <h4  style={{fontWeight:"600"}} className="text-center mt-5"> Qualification</h4>

      <div className="headers d-flex gap-4 mt-3 justify-content-center">
      <button onClick={displayEducation}   className={section ? "education  Qual-section" : "education  Qual-section checked-section"}>Education  <SlGraduation/></button>
      <button onClick={displayWork} ref={work} className={section ? "education  Qual-section checked-section" : "education  Qual-section"}>Work <MdOutlineWorkOutline/></button>
      </div>

      <div ref={education}  className="education-details qualificaton-section  gap-3 justify-content-center mt-5">
      <div>
      <h6>Computer-Science</h6>
      <p>Covenant University - Ota</p>
      <p><AiOutlineCalendar/> 2017 - 2021</p>
      </div>

      <div className="qualification-line"> 
      </div>

      <div>
        <h6>IBM Junior Q-Radar specialist</h6>
        <p>IBM</p>
        <p><AiOutlineCalendar/> 2019</p>
      </div>
    </div>


    <div ref={work}  className="work-details  qualificaton-section   gap-3 justify-content-center mt-5">
    <div>
      <h6>Web Developer</h6>
      <h6>Intern</h6>
      <p>ASKIT NG</p>
      <p><AiOutlineCalendar/> 2020</p>
      </div>

      <div className="qualification-line"> 
      </div>

      <div>
        <h6 className="sub-text">Front-end Developer</h6>
        <p>Neptune Software Group</p>
        <p><AiOutlineCalendar/> 2022</p>
      </div>

    </div>

    </div>

    <div className="services mt-5">

      <h4  style={{fontWeight:"600"}}  className="text-center">Services</h4>
      <div className="services-container justify-content-center d-flex gap-5">
       
      <div className="services-div front-end">
        <p className="code-icon"><BsCodeSlash/></p>
        <h6  style={{fontWeight:"600"}}>Frontend Developer</h6>
        <p className="view mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">view more <AiOutlineArrowRight/></p>
        


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" >
    <div class="modal-content" style={{backgroundColor:"rgb(28, 32, 34)"}}>
      <div class="modal-header" >
        <h6 style={{color:"white"}}>Frontend <br/>Developer</h6>
        <button style={{backgroundColor:"white", color:"white"}}  type="button" class="btn-close btn-light btn " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{color:"white"}}>
    <p>React JS</p>
    <p>HTML, CSS, JavaScript</p>
    <p>Responsive design</p>
      </div>
    </div>
  </div>
</div>
      </div>

      <div className="services-div mobile-dev">
      <p className="code-icon"><AiOutlineMobile/></p>
        <h6 style={{fontWeight:"600"}}>Mobile Developer</h6>
        <p className="view mt-3" data-bs-toggle="modal" data-bs-target="#mobileModal">view more <AiOutlineArrowRight/></p>

        <div class="modal fade" id="mobileModal" tabindex="-1" aria-labelledby="mobileModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" >
    <div class="modal-content" style={{backgroundColor:"rgb(28, 32, 34)"}}>
      <div class="modal-header" >
        <h6 style={{color:"white"}}>Mobile <br/>Developer</h6>
        <button style={{backgroundColor:"white", color:"white"}}  type="button" class="btn-close btn-light btn " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{color:"white"}}>
    <h6>Ionic</h6>
      </div>
    </div>
  </div>
</div>

      </div>
      </div>

    </div>

  
    </main>

   
    
    </div>
        </>
    )
}

export default Home