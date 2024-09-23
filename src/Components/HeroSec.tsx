import { ko } from '../assets';
const HeroSec = () => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="mt-[200px] text-headone font-roboto font-extrabold bg-clip-text text-transparent bg-gradienthead">
        HOLLA! 👋
        <br />
        I'M A SOFTWARE
        <br />
        DEVELOPER
      </h1>
      <div
        className="w-[427px] h-[589px]  bg-darkblue bg-blend-luminosity "
        style={{
          backgroundImage: `url(${ko})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
       
      </div>
    </div>
  );
};

export default HeroSec;
