import React from 'react'

function About() {
  return (
    <section id='About'  >
      <div className="flex justify-evenly sm:flex-col-reverse pt-40 pb-20">
        <h1 className=" text-justify font-montserrat pl-10 sm:pl-0 ">
          I'm a technology enthusiast with a passion for creativity and<br/>
          innovation. My journey began in 2022 with a bachelor's degree in cyber<br/>
          security from the{' '}
          <a href="https://www.iaa.ac.tz/" className='text-wood'>Institute of Accountancy Arusha</a>,<br/>
          complemented by self-learning on platforms like YouTube. From cyber<br/>
          security to software development and 3D animation, I've explored<br/>
          diverse realms. Alongside my professional pursuits, I indulge in<br/>
          cartoons like "Kung Fu Panda" and strumming tunes on my guitar. Driven<br/>
          by boundless curiosity, I embrace challenges with fervor, evolving<br/>
          into a multifaceted technologist<br/>
        </h1>
        <p className="text-wood text-4xl pt-10 sm:py-10 font-roboto font-bold">
          About <span className='text-black'>Me</span>
        </p>
      </div>
    </section>
  )
}

export default About
