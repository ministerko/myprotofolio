import { NavBar,HeroSec } from '../Components';
import { elione } from '../assets';
const App = () => {
  return (
    <div className="">
      <img src={elione} className="absolute right-0 top-0 " />
      <div className=" static w-auto h-full mx-[100px] ">
        <div className="container mx-auto mt-[50px]">
          <NavBar />
          <HeroSec/>
        </div>
      </div>
    </div>
  );
};

export default App;
