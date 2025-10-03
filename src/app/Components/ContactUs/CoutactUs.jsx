// components/ContactUs.jsx
import React from 'react';
import { FaEnvelope, FaInstagram, FaDribbble, FaBehance, FaVimeo, FaLinkedin } from 'react-icons/fa';
import './contactus.css'

export default function ContactUs() {
  return (
    <>
   <div className='mainContainer'>
   <div className='container'>
    <section className="contact-section container-fluid py-5 px-3 px-md-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6 mb-4">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="lead">I'd like to hear from you!</p>
          <p className="text-muted">
            If you have any inquiries or just want to say hi, please use the contact form!
          </p>
          <div className="contact-email mt-4 mb-3">
            <FaEnvelope className="me-2" />
            <a href="mailto:uniformvala@gmail.com" className="text-decoration-none text-dark">
              uniformvala@gmail.com
            </a>
          </div>
          {/* Social Icons */}
          <div className="social-icons d-flex gap-3 mt-4">
            <FaInstagram />
            <FaDribbble />
            <FaBehance />
            <FaVimeo />
            <FaLinkedin />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="col-md-6">
          <form className="contact-form">
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email *" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-send">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="contact-footer mt-5 pt-4 border-top">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>About Uniform Vala</h5>
            <p className="text-muted small">
              We're a uniform manufacturing company committed to quality, comfort, and brand identity.
              Serving schools, hospitals, and corporates nationwide.
            </p>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled text-muted small">
              <li><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-muted text-decoration-none">Our Services</a></li>
              <li><a href="/products" className="text-muted text-decoration-none">Products</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Contact Info</h6>
            <p className="text-muted small mb-1">+91 9876543210</p>
            <p className="text-muted small mb-1">support@uniformvala.com</p>
            <p className="text-muted small">Bangalore, India</p>
          </div>
        </div>
      </div>
    </section>
    </div>

    <div className='container-fluid'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6243092123127!2d77.08410077496043!3d28.730771579613716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1758959123379!5m2!1sen!2sin" width="1550" height="450" style={{border:"0;"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
   </div>
    
    </>
  );
}
