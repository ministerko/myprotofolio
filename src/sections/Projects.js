import React from 'react'
import { bapp, exp } from '../assets/images'

function Projects() {
  return (
    <section className="border-t-4 border-wood w-auto mb-20" id="Projects">
      <div className="mt-10">
        <h1 className="font-montserrat text-center text-4xl font-bold">
          Projects
        </h1>
        <div className='kd:flex kd:flex-row kd:justify-evenly'>
          <div className=" h-auto w-72 shadow-md rounded-xl mt-10">
            <img
              src={bapp}
              alt="bapp"
              className="h-fit w-fit p-2 object-cover"
            />
            <div className=" font-montserrat mx-3 pb-10">
              <p className="flex text-wood font-bold ">Bfinder</p>
              <p>
                An innovative desktop application designed to assist developers
                in identifying and resolving bugs within their codebase.
              </p>
              <div className="flex-1 mt-4 ml-[70px]">
                <a
                  href="#"
                  className=" text-center bg-wood p-2 w-32   rounded-xl text-white font-bold"
                >
                  Source codes
                </a>
              </div>
            </div>
          </div>
          <div className=" h-auto w-72 shadow-md rounded-xl mt-10">
            <img
              src={exp}
              alt="bapp"
              className="h-fit w-fit p-2 object-cover"
            />
            <div className=" font-montserrat mx-3 pb-10">
              <p className="flex text-wood font-bold ">Explorer</p>
              <p>
                An innovative web application designed to spontaneously generate
                intriguing facts about wildlife.
              </p>
              <div className="flex-1 mt-4 ml-[70px]">
                <a
                  href="#"
                  className=" text-center bg-wood p-2 w-32   rounded-xl text-white font-bold"
                >
                  Source codes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
