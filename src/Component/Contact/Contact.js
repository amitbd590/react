import React from 'react'
import './Contact.css'

function Contact(props) {
  return (
    <div className="contact container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <h2>CONTACT US</h2>
          <h1>Get In Touch</h1>
          <div>
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Fill All label</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  id="formGroupExampleInput"
                  placeholder="Email"
                />
                <input
                  type="password"
                  class="form-control mb-2"
                  id="formGroupExampleInput2"
                  placeholder="Password"
                />
                <input
                  type="text"
                  class="form-control mb-2"
                  id="formGroupExampleInput2"
                  placeholder="Address"
                />
                <input
                  type="text"
                  class="form-control myFrom mb-5"
                  id="formGroupExampleInput2"
                  placeholder=""
                />
                <a href="#" className="btn-formate-2">
                  Send Massage
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="part-2">
            <div>
              <img src="" alt="" />
            </div>
            <h2>Contact Info</h2>
            <p>
              We denounce with righteous indignation in and dislike men who are
              so beguiled and to demo realized by the charms of pleasure moment,
              so blinded by desire, that they cannot foresee the pain and
              trouble that are bound.
            </p>
            <div className="list">
                <ul>
                    <li>374 William S Canning Blvd, Fall River MA 2721, USA</li>
                    <li>(+880)173-97531045</li>
                    <li>info@qizbari.com</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
