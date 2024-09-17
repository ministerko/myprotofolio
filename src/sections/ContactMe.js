import React from 'react';
import { call, email } from '../assets/images';

function ContactMe() {
  return (
    <section className=" w-auto h-auto pb-20 " id="ContactMe">
      <h1 className="font-montserrat text-center text-4xl font-bold text-white pt-10">
        Contact Me
      </h1>
      <div className='flex flex-row justify-around'>
        <div className=" pt-5 flex flex-row">
          <img src={call} className="h-6 w-6" />
          <h1 className="font-montserrat  text-sm font-bold text-wood mt-1 mx-2">
            +255652012755
          </h1>
        </div>
        <div className=" pt-5 flex flex-row">
          <img src={email} className="h-6 w-6" />
          <h1 className="font-montserrat  text-sm font-bold text-wood mt-1 mx-2">
            mwaijegakelvin@gmail.com
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
