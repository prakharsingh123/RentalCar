import React from 'react'
import './Header.css'

<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet"></link>
function Header() {
  return (
    <div className="desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <div className="rectangle" />
          <div className="m-0 p-4 flex justify-between hover:text-cyan-400 underline-offset-1">
            <div className="text-3xl ml-10 text-white font-semibold">Rent<span className="text-sky-500">car</span></div>
            <div className="ml-[34%] text-white absolute hover:translate-x-0.5 motion-safe:transition" ><a href='/'> Home </a></div>
            <div className="ml-[42%] text-white absolute hover:translate-x-0.5 motion-safe:transition" ><a href='/'> How it works? </a></div>
            <div className="ml-[55%] text-white absolute hover:translate-x-0.5 motion-safe:transition" ><a href='/'> Services </a></div>
            <div className="ml-[63%] text-white absolute hover:translate-x-0.5 motion-safe:transition" ><a href='/'> Contact Us </a></div>
            <div id='icon'>
                <button className="flex justify-end ml-[30%] mx-3 px-2 py-1 box-border 2px solid blue rounded-md bg-blue-600 text-white">  Login </button>
                <button className="flex text-stone-50" ><i class="ri-menu-line"></i></button>

            </div>
           </div>

           <div id='box-1'className="m-10 mt-[12rem] p-6 pl-6 flex w-[30%] h-[22%] text-6xl text-white font-bold" ><span id='motion-text'>Car Rentals for Every Occasion</span> 
           <div className="ml-[15%] -mt-[5%] px-2 flex absolute w-8/12 h-32">
          <img className="absolute " src='https://i.pinimg.com/originals/e7/85/86/e785862c4ed9f1cc8d5fa58350d03266.png' alt='logo' class="motion-image"></img>
        </div>
        <div>
          
        </div>
          </div>
          <button className="mt-16 mx-16 px-2 py-1 text-1xl rounded-md bg-blue-600 text-white">Find a Car-</button>
          <div className="w-64 h-16 m-9 ml-[80%] mt-[5%]">
            <div className="flex justify-center font-serif font-semibold text-white text-[1.3rem]">Get extra 10% discount</div>
            <div className="flex justify-center font-light text-white">On first 3 rides</div>
           </div>

        <div className="w-[50%] h-[72px] -mt-[6%] bg-sky-500 motion-box"> 
        <div className="flex justify-evenly font-sans font-bold text-[2rem]">
          <div> 150+</div>
          <div> 1000+</div>
          <div> 24/7</div>
          
         </div>
         <div className="flex justify-evenly pl-6 font-serif ">

         <div> Luxury cars</div>
          <div> Customer Reviews</div>
          <div> Customer Support</div>

         </div>
        </div>
       

        </div>
        
        </div>
      </div>
     
    </div>
  )
}

export default Header
