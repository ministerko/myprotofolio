import React from 'react'
import { front, back, d, other, then } from '../assets/images'

function TechStack() {
  return (
    <section id="techStack" className="pt-40 ">
      <h1 className="font-roboto text-center text-4xl font-bold  pb-28">
      Tech <span className="text-wood">Stack</span>
      </h1>
      <div className="grid grid-cols-2 grid-flow-row gap-4 sm:grid-cols-1 nd:grid-cols-3  gap-y-20 justify-items-center pb-20">
        <div class="relative shadow-md rounded-lg  h-80 w-80 sm:h-auto sm:w-64 border-t-4 border-l-4 border-wood  ">
          <img
            src={front}
            alt="frontDev"
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-wood m-auto -mt-10 w-16 h-16   "
          />
          <h1 className=" font-montserrat text-center mt-6 text-2xl font-bold">
            Frontend
          </h1>
          <ul className=" font-montserrat text-xl ml-8 mt-6 space-y-5 list-disc mb-5">
            <li className="">Html & Css</li>
            <li className="">Javascript</li>
            <li className="">React</li>
            <li className="">Tailwind Css</li>
          </ul>
        </div>
        <div class="relative shadow-md rounded-lg  h-80 w-80 sm:h-auto sm:w-64 border-t-4 border-l-4 border-wood ">
          <img
            src={back}
            alt="frontDev"
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-wood m-auto -mt-10 w-16 h-16   "
          />
          <h1 className=" font-montserrat text-center mt-6 text-2xl font-bold">
            Backend
          </h1>
          <ul className=" font-montserrat text-xl ml-8 mt-6 space-y-5 list-disc mb-5">
            <li className="">Django</li>
            <li className="">PHP (intermediate)</li>
            <li className="">NodeJS (entry-level)</li>
            <li>MySQL & SQlite</li>
            
          </ul>
        </div>
        <div class="relative shadow-md rounded-lg  h-auto w-80 sm:h-auto sm:w-64 border-t-4 border-l-4 border-wood  ">
          <img
            src={other}
            alt="frontDev"
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-wood m-auto -mt-10 w-16 h-16   "
          />
          <h1 className="font-montserrat text-center mt-6 text-2xl font-bold">
            I Speak &#x1F60A;
          </h1>

          <ul className=" font-montserrat text-xl ml-8 mt-6 space-y-5 list-disc  mb-5">
            <li className="">Python</li>
            <li className="">C & C++</li>
            <li className="">Java (intermediate)</li>
            <li className="">Rust (entry-level)</li>
            <li className="">Solidity (entry-level)</li>
           
          </ul>
        </div>
        <div class="relative shadow-md rounded-lg  h-80 w-80 sm:h-auto sm:w-64 border-t-4 border-l-4 border-wood  ">
          <img
            src={d}
            alt="frontDev"
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-wood m-auto -mt-10 w-16 h-16   "
          />
          <h1 className=" font-montserrat text-center mt-6 text-2xl font-bold">
            3D
          </h1>
          <ul className="  font-montserrat text-xl ml-8 mt-6 space-y-5 list-disc  mb-5">
            <li className="">Three js</li>
            <li className="">Blender</li>
          </ul>
        </div>

        <div class="relative shadow-md rounded-lg  h-auto w-80 sm:h-auto sm:w-64 border-t-4 border-l-4 border-wood  ">
          <img
            src={then}
            alt="frontDev"
            class="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-wood m-auto -mt-10 w-16 h-16   "
          />
          <h1 className=" font-montserrat text-center mt-6 text-2xl font-bold">
            Other Stuffs
          </h1>
          <ul className=" font-montserrat text-xl ml-8 mt-6 space-y-5 list-disc mb-5">
            <li>Cyber Security</li>
            <li className="">Algo trading</li>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechStack
