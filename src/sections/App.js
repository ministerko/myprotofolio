import { kapp, git, twit, ig } from '../assets/images'
import { navLinks } from '../constants'

function App() {
  return (
    <section id='App'>
      <div className='flex justify-between '>
        <div >
          <img src={kapp} alt="kapplogo" height={50} width={50} />
        </div>
         <nav className='flex-1 flex justify-center items-center gap-12 text-xl sm:hidden md:hidden'>
           {navLinks.map((item) =>(
            <li className='list-none'>
              <a href={item.href} className='text-black hover:text-wood font-montserrat '>{item.label}</a>
            </li>
           ))}
         </nav>
         <div>
           <button></button>
         </div>
        <div class="flex flex-wrap  justify-end ">
          <a href='https://github.com/ministerko'><img
            src={git}
            alt="Picture 1"
           
            className="w-10 h-10 sm:w-8 sm:h-8 sm:mt-2 text-xl mt-2"
          /></a>
          <a href='https://www.instagram.com/therealkelvinmwaijega/'><img
            src={ig}
            alt="Picture 2"
          
            className="w-10 h-10 sm:w-8 sm:h-8 sm:mt-2 text-xl mt-2"
          /></a>
          <a href='#'><img
            src={twit}
            alt="Picture 3"
            
            className="w-10 h-10 sm:w-8 sm:h-8 sm:mt-2 text-xl mt-2"
          /></a>
        </div>
      </div>
    </section>
  )
}

export default App
