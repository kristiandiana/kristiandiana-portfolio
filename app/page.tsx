import { useState } from "react";

import './style.css';
import github_logo from './img/github_logo.png';
import portrait from './img/portrait.jpg';
import Image from 'next/image'
import vegas from './img/photo1.jpg';
import concert from './img/IMG_9028.jpg';
import golf from './img/IMG_3285.jpg';
 
export default function Home() {
  return (
    <main >
      <script defer src="app.js"></script>

<div className="opening" id="home">
    <div className="opening__wrapper">
      <div className="opening__card">
        <h1 className="text-6xl">Kristian Diana</h1>
        <p>Engineering 1 Student at McMaster University</p>
      </div>
      <div className="opening__card">
        <Image
          src={portrait}
          width={150}
          height={150}
          alt="portrait"
          />
      </div>
    </div>
  </div>

      <div className="flex gap-3 flex-col justify-between p-24 max-w-5xl mx-auto">
      
 
      

      <div className="row">
        <div className="column left">
         
        <ol>
          <li><a href="#home">Home</a></li>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About Me!</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ol>
             

        </div>


        <div className="column right">
          
        <div className="flex flex-col gap-2" >

        <hr/>
        <div className="site__section" id="intro">
          <h2 className= "text-4xl" >Introduction</h2>
          <p>Hello and welcome to my personal website portfolio!
            I am currently in my first year of engineering at McMaster University
            with my intentions to pursue software engineering in 
            my upper years. Through this site I intend on showcasing 
            some of my past projects, and skills I have gained in my
            through independent research. 
          </p>
        </div>
        <hr/>
          

        <div className="site__section" id="projects">
        <h2 className="text-4xl" >Projects</h2>
        <br/>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold"><a href="https://kristiandiana.github.io/ShadCalgary/">SHAD Calgary Design Project</a></h3>
            <p>This site is a general portfolio that I worked on
              in July 2022. SHAD is a summer program focused around
              STEM and entrepreneurship. Participants must work in groups
              to create a design project centered around a given theme.
            </p>
            
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold"><a href="https://devpost.com/software/news-shield">News Shield</a></h3>
            <p>News shield was a project that myself and 3 fellow SHAD alumni
              worked on together at Hack the North 2022. This was one of first
              times that I was introduced to the concept of API's and learning
              how to use them. The motive behind News Shield is to keep people
              from entering "echo-chambers" in the media they consume.
            </p>
          </div>

          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold"><a href="https://kristiandiana.netlify.app/">Personal Porfolio: Edition 1</a></h3>
            <p>This personal porfolio was made in November 2022 during my grade 12
              year of highschool. This was a project I took on simply because I was
              interested in web development and wanted to further improve upon my
              prior knowledge. 
            </p>
          </div>
        </div>

        </div>
        <hr/>

        <div className="site__section" id="about">
          <h2 className="text-4xl">About Me!</h2>
          <p>
            Now that you have seen some of my "professional" side...
            I am sure you would love to know what I get up to in my free time!
            <br/><br/><br/>
            Fitness is something that is very important to me, which has led
            to much of my time being spent in the gym. I used to be a competitive
            gymnast but have now transitioned to golf. There's nothing quite like
            a casual round of golf with the boys. 
            <Image
          src={golf}
          width={600}
          height={600}
          alt="portrait"
          />
            <br/><br/><br/>
            I also really enjoy music. This year alone I went to over 5 concerts
            including; Post Malone, Drake, Metallica, and others. Between
            classes you can bet that you will not catch me without my airpods.
            <Image
          src={concert}
          width={600}
          height={600}
          alt="portrait"
          />
            <br/><br/><br/>
            
            Travelling is very important to me. Seeing the world and spending
            time with family is one of the many priveleges that life has to offer.
            And if you were wondering, yes, F1 Las Vegas was insane.
          </p>
          <Image
          src={vegas}
          width={600}
          height={600}
          alt="portrait"
          />
        </div>
        <hr/>

      </div>


        </div>
      </div>

      </div>

      
      <div className="contacts__overall__main" id="contacts">
      <div className="contacts__overall">
      <div className="contacts">
        <div className="contacts__wrapper">
          <div className="contacts__card">
            <div className="contacts__btn"><button><a href="https://github.com/kristiandiana" target="_blank" rel="noreferrer">Go To Github</a></button></div>
          </div>
          <div className="contacts__card">
            <div className="contacts__btn"><button className="contacts__btn"><a href = "mailto: kristian8diana@gmail.com" rel="noreferrer" target="_blank">Email</a></button></div>
            
            </div>
          <div className="contacts__card">
            <div className="contacts__btn"><button className="contacts__btn"><a href="https://linkedin.com/in/kristian-diana-645984246" rel="noreferrer" target="_blank">Go To LinkedIn</a></button></div>
          </div>
          
          </div>
          <hr></hr>
      </div>

      </div>
      </div>
      
      

      
      
 
      
 
    </main>
  
  )
}
 