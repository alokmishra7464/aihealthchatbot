import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className="about-heading" id='about'>
        <h1>About Us</h1>
        <p>
          This section includes information about the authors of this website.
        </p>
      </div>
      <div className="about-container">
        <section className="about">
          <div className="about-image">
            <img src={"/about.png"} />
          </div>
          <div className="about-content">
            <h2>Hi there!</h2>
            <p>
              This is a project build for quickly know the answers for day to day medical realted problems.<br></br>

              <b>Team Members </b> - <br></br>

              Aman Sahu - 0176CS221026 <br></br>
              Abhinit Parasar - 0176CS221010 <br></br>
              Ayush Kr. Sinha - 0176CS221053<br></br>
              Alok Mishra - 0176CS221023<br></br>


            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
