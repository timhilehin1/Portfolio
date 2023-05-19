import {React, useEffect} from "react";
import musical from "../images/musical.png"
import Newcastle from "../images/Newcastle.png"
import Quizical from "../images/Quizical.png"
import TM from "../images/TM.png"
import { AiOutlineArrowRight } from "react-icons/ai";

function Portfolio(prop){
    const{mode, setMode} = prop

useEffect(()=>{
    window.scrollTo(0, 0);
},[])

    return (
      <div className="App z-n1">
     <main className="main z-n1">

      <h5 style={{fontWeight:"600"}} className="text-center">Portfolio</h5>
      <p className="text-center">Recent Works</p>

       <div className="d-flex justify-content-center ">
      <div class="card " style={{width: "40rem",backgroundColor: mode ? "rgb(28, 32, 34)" : "#ffffff"}}>
  <img src={musical} class="card-img-top img-fluid w-100" alt="..."/>
  <div class="card-body">
    <h5 style={{fontWeight:"600"}} class="card-title">Music Player</h5>
    <p class="card-text">This musical web Applcation gives users the opportunity to listen to any of their preferred genre of songs. The Application also allows users to create playlists of their own and provides a wonderful listening experience.</p>
    <a href="https://github.com/timhilehin1/Musica.git"><button class="contact-btn-lightmode">Demo <AiOutlineArrowRight/></button></a>
  </div>
</div>
</div>

<div className=" mt-4  d-flex justify-content-center">
      <div class="card " style={{width: "40rem",backgroundColor: mode ? "rgb(28, 32, 34)" : "#ffffff"}}>
  <img src={Newcastle} class="card-img-top img-fluid w-100" alt="..."/>
  <div class="card-body">
    <h5 style={{fontWeight:"600"}} class="card-title">Newcastle</h5>
    <p class="card-text">This Web Application allows user to get the Jersey of their preferred football Club from the comfort of their Couch while using their devices. The Application provides a Checkout Page for Users to pay for the Jerseys bought. </p>
    <a href="https://timhilehin1.github.io/React_e-commerce-app/"><button class="contact-btn-lightmode">Demo <AiOutlineArrowRight/></button></a>
  </div>
</div>
</div>

<div className=" mt-4 d-flex justify-content-center">
      <div class="card " style={{width: "40rem",backgroundColor: mode ? "rgb(28, 32, 34)" : "#ffffff"}}>
  <img src={Quizical} class="card-img-top img-fluid w-100" alt="..."/>
  <div class="card-body">
    <h5 style={{fontWeight:"600"}} class="card-title">Quizical</h5>
    <p class="card-text">This web based Application consists of thousands of football trivial questions that are being fetched from an API, It allows users, most especially football fans to test their knowledge on football.</p>
    <a href="https://timhilehin1.github.io/quiziccal-App/"><button class="contact-btn-lightmode">Demo <AiOutlineArrowRight/></button></a>
  </div>
</div>
</div>

<div className=" mt-4  d-flex justify-content-center">
      <div class="card" style={{width: "40rem",backgroundColor: mode ? "rgb(28, 32, 34)" : "#ffffff"}}>
  <img src={TM} class="card-img-top img-fluid w-100" alt="..."/>
  <div class="card-body">
    <h5 style={{fontWeight:"600"}} class="card-title">Game Store(TM)</h5>
    <p class="card-text">T&M is a web based application that allows users most especially Game lovers to shop for games wthout having to go to the Game store. </p>
    <a href="https://timhilehin1.github.io/Game-website/"><button class="contact-btn-lightmode">Demo <AiOutlineArrowRight/></button></a>
  </div>
</div>
</div>


     </main>
     </div>
    )
}


export default Portfolio
