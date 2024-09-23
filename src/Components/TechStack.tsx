import { rust,python,js,tauri, django, fast,Ts,rea } from "../assets";
const TechStack = () => {
  return (
    <div className=" mt-[375px]">
      <div className="w-auto h-[560px] bg-lightblue rounded-[47px] opacity-20   ">
  
        <div>
          <div className="flex flex-row mx-[40px] justify-between">
            <img src={rust} className="h-[138px] w-[138px]"/>
            <img src={python} className="h-[138px] w-[138px]" />
            <img src={js} className="h-[138px] w-[138px]"/>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <img src={tauri}/>
            </div>
            <div className="flex flex-row">
              <img src={django}/>
              <img src={fast}/>
              
            </div>
            <div className="flex flex-row">
              <img src={Ts}/>
              <img src={rea}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
