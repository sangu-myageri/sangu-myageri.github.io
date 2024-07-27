import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div id="contact" className='pb-5'>
        <div className="container">
          <h2  className="mb-5 maven-font heading">Contact</h2>
          <div className="row">
            <div className="col-sm-12">
              <div id="social-media">
                <a href="https://in.linkedin.com/in/sangameshmyageri" target="_blank" title="Sangamesh Myageri Linkedin"><i
                  className="fab fa-linkedin"></i></a>
                <a href="https://x.com/sangumyageri" target="_blank" title="Sangamesh Myageri Twitter"><i
                  className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/sangu.myageri" target="_blank" title="Sangamesh Myageri Instagram"><i
                  className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
