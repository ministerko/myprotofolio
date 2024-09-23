import { NavBar,HeroSec,AboutMe,TechStack } from '../Components';
import { elione,elitwo } from '../assets';
const App = () => {
  return (
    <div className="">
      <img src={elione} className="absolute right-0 top-0 h-[400px] w-[400px]" />
      <img src={elitwo} className="absolute left-0 top-[500px]"/>

      <div className=" static w-auto h-full mx-[100px] ">
        <div className="container mx-auto mt-[50px]">
          <NavBar />
          <HeroSec/>
          <AboutMe/>
          <TechStack/>
        </div>
      </div>
    </div>
  );
};

export default App;
