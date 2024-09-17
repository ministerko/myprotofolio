import React from 'react';
import { python, rust, js } from '../assets/images';

function TechStack() {
  return (
    <section id="techStack" className="pt-40 ">
      <h1 className="font-roboto text-center text-4xl font-bold  pb-28">
        Tech <span className="text-wood">Stack</span>
      </h1>
      <div className="grid grid-cols-2 grid-flow-row gap-4 sm:grid-cols-1 nd:grid-cols-3  gap-y-20 justify-items-center pb-20">
        <div class="relative shadow-lg rounded-full  h-40 w-40 sm:h-40 sm:w-40 flex items-center grid justify-items-center  ">
          <div>
            <img src={python} />
          </div>
        </div>
        <div class="relative shadow-lg rounded-full  h-40 w-40 sm:h-40 sm:w-40 flex items-center grid justify-items-center  ">
          <div>
            <img src={js} />
          </div>
        </div>
        <div class="relative shadow-lg rounded-full  h-40 w-40 sm:h-40 sm:w-40 flex items-center grid justify-items-center  ">
          <div>
            <img src={rust} />
          </div>
        </div>
 
 
      </div>
    </section>
  );
}

export default TechStack;
