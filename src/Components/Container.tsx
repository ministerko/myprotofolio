import { ReactNode } from 'react';

interface ContainerProps{
  children:ReactNode;

}

const Container = ({children}: ContainerProps) => {
  return (
    <div className="w-auto pb-3 h-[100dvh] px-[10px] shadow-xl bg-middleblue pt-[10px]">
    <div className="relative h-[calc(100dvh-32px)] overflow-y-auto  bg-darkblue shadow-black shadow no-scroll-bar rounded-2xl ">
      
        {children}
     
      
    </div>
  </div>
  )
}

export default Container