import {kelvin} from '../assets/images'

function Hero  ()  {
  return (
    <section >
      <div className='flex justify-evenly sm:flex-col'>
        <div className="pt-40 px-20 font-bold sm:pt-20 sm:px-10">
          <h1 className=" font-montserrat text-xl">Hi I'm kelvin</h1>
          <p className="font-Roboto text-4xl">Software<br/><span className='text-wood'>Developer</span></p>
        </div>
        <img
          src={kelvin}
          alt='kelvinImg'
         height={300}
         width={300}
        
        />
      </div>
    </section>
  )
}

export default Hero
