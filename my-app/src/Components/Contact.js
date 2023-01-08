import {React, useEffect} from "react";
import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { HiOutlineLocationMarker} from "react-icons/hi";

function Contact(){


    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (

        <main className="main">

    <h5 style={{fontWeight:"600"}} className="text-center mt-3">Contact Me</h5>
      <p className="text-center">Get in touch</p>

      
     <div className="contact">
      <aside>
        <div className="email d-flex gap-3">
           <p className="" style={{fontSize:"2rem", color:"#AB8000"}}><AiOutlineMail/></p>
            <div className="">
            <h5>E-mail</h5>
            <p >timilehinoladapo0@gmail.com</p>
            </div>
        </div>

        <div className="location d-flex gap-3">
           <p className="" style={{fontSize:"2rem", color:"#AB8000"}}><HiOutlineLocationMarker/></p>
            <div className="">
            <h5>Location</h5>
            <p>Lagos, Nigeria</p>
            </div>
        </div>

      </aside>

      <form action="https://formspree.io/f/xoqzqabb" method="POST">
           <div className="">
          <input className="input w-100" type="text" name="name" placeholder="Name"/>
          </div>
          <div className="">
          <input  className="input w-100" type="email" name="email" placeholder="Email"/>
          </div>
          <div className="">
          <input  className="input w-100" type="text" name="Phone" placeholder="Phone Number"/>
          </div>

          <div className="">
          <textarea name="message" row="50"  className="mt-3 textarea"  placeholder="Project Description"/>
          </div>

         <button type="submit" className="send contact-btn-lightmode mt-3">Send Message <AiOutlineSend/> </button>
      </form>

      </div>

        </main>
    )
}

export default Contact


