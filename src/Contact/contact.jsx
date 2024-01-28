import React from 'react'
import './contact.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";



const Contact = () => {


  return (
    <div>
      <div className='banner-card' >
        <img src="https://insemitech.com/wp-content/uploads/2022/05/contact-banner.jpg" className='banner' />
        <div className='banner-text'>
          <h2>Contact</h2>
          <h2>Welcome to InSemi!<br />We are here to assist you.</h2>
          <button className='banner-button'>WRITE TO US →</button>
        </div>
      </div>
      <div className='card-descripton'>
        <div className='testimonial'>
          <img src='https://insemitech.com/wp-content/uploads/2022/05/contact-12.png' />
          <h1>Business Query</h1>
          <a href='business@insemitech.com' className='mail'>business@insemitech.com</a>
        </div>
        <div className='testimonial'>
          <img src='https://insemitech.com/wp-content/uploads/2022/05/contact-13.png' />
          <h1>Careers</h1>
          <a href='business@insemitech.com' className='mail'>careers@insemitech.com</a>
        </div>
        <div className='testimonial'>
          <img src='https://insemitech.com/wp-content/uploads/2022/05/contact-14.png' />
          <h1>PR / Marketing</h1>
          <a href='business@insemitech.com' className='mail'>marketing@insemitech.com</a>
        </div>
      </div>

      <div>
        <h1 className='mapheading'> Our Global Presence</h1>
        <img src='https://insemitech.com/wp-content/uploads/2022/07/map.png' className='map' />
      </div>

      <div className='card-descripton'>
        <div className='testimonial'>
          <h1>Headquartered at</h1>
          <p>2nd Floor, Discoverer Building,<br />
            ITPL, Bengaluru, Karnataka,<br />
            India - 560066</p>
        </div>
        <div className='testimonial'>
          <h1 >Follow us on</h1>
          <FaLinkedinIn className='icons' />
          <FaTwitter className='icons' />
          <FaFacebookF className='icons' />
          <FaInstagram className='icons' />
          <TfiYoutube className='icons' />
        </div>
      </div>
      <form>
        <div className='form-container'>
          <h1 >Get in Touch<br /> <span className='form-subheading'>Let’s talk about your requirements</span></h1>
          <div className='input-row'>
            <div class="form-control ">
              <label for="first_name"></label>
              <input id="first_name" name="first_name" placeholder="First Name*" />
            </div>
            <div className="form-control ">
              <label for="last_name"></label>
              <input id="last_name" name="last_name" placeholder="Last Name*" />
            </div>
          </div>
          <div className="form-controls">
            <label for="Business_Email"></label>
            <input className='lengthbox' id="Business_Email" name="Business_Email" placeholder="Business Email*" />
          </div>
          <div className='input-row'>
            <div className="form-control">
              <label for="Phone_number"></label>
              <input id="Phone_number" name="Phone_number" placeholder="Phone number*" />
            </div>
            <div className="form-control">
              <label for="Company_name"></label>
              <input id="Company_nam" name="Company_name" placeholder="Company*" />
            </div>
          </div>
          <div className='input-row'>
            <div className="form-control">
              <label htmlFor="country"></label>
              <select className="select-bar" id="country" placeholder="India" >
                <option>India*</option>
                <option>United Sates of America</option>
                <option>Canada</option>
                <option>Europe</option>
                <option>United Kingdom</option>
                <option>Singapore</option>
                <option>South Korea</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="type"></label>
              <select className="select-bar" id="query-type" >
                <option>Sales / Business Query</option>
                <option>PR / Marketing</option>
                <option>Careers</option>
                <option>Partnerships</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label for="text"></label>
            <textarea id="text" className='lengthbox' name="text" rows="4" cols="50" placeholder="Breif about your requirements*"></textarea>
          </div>
          <div >
            <button className='button' id='button'>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  )

}



export default Contact


