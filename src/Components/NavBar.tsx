import {kom} from "../assets"
const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <img src={kom} className="h-10 w-20" alt="kelvin logo" />
      <div className=" space-x-10 text-nav text-white font-roboto">
       <a className=" font-bold" href="#">Home</a>
       <a href="#">About Me</a>
       <a href="#">Tech Stack</a>
       <a href="#">Projects</a>
       <a href="#">Experience</a>
       <a href="#">Contact Me</a>
       
      </div>
      
    </div>
    
  )
}

export default NavBar