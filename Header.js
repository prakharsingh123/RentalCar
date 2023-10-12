import React from 'react'
import './Header.css'






<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet"></link>
function Header() {
  

  return (
   

    <div className="desktop">
    
          <div className="overlap">
            <div className="rectangle" />
          <div id='navbar' className="m-0 p-4 flex justify-between ">
            <div id='logo' className="text-3xl ml-10 text-white font-semibold">Rent<span className="text-sky-500">car</span></div>
            <div id='nav' className="m-0 p-4 flex justify-between ">
            <div className="-ml-[48%] text-white absolute hover:translate-x-0.5 motion-safe:transition " ><a href='/'> Home </a></div>
            <div className="-ml-[42%] text-white absolute hover:translate-x-0.5 motion-safe:transition" ><a href='/'> How it works? </a></div>
            <div className="-ml-[32%] text-white absolute hover:translate-x-0.5 motion-safe:transition" ><a href='/'> Services </a></div>
            <div className="-ml-[23%] text-white absolute hover:translate-x-0.5 motion-safe:transition" ><a href='/'> Contact Us </a></div>
            </div>
            
           </div>
           <div className='m-0 p-4 flex justify-between'>
                <button id='button-1' className="flex ml-[930px] -mt-[60px] mx-3 px-2 py-1 h-8 box-border 2px solid blue rounded-md bg-blue-600 text-white"> Login</button>
               <button ><i id='menu' className="fa-solid fa-bars -mt-[55px] sm:block"></i></button> 
                
            </div>

           <div id='box-1'className="m-10 mt-[5rem] p-6 pl-1 flex w-[30%] h-[22%] text-6xl text-white font-bold" ><span id='motion-text'>Car Rentals for Every Occasion</span> 
           <div id='car-image' className="ml-[14%] -mt-[%8] px-2 flex absolute w-6/12 h-32">
          <img className="absolute" src='https://i.pinimg.com/originals/e7/85/86/e785862c4ed9f1cc8d5fa58350d03266.png' alt='logo' class="motion-image"></img>
        </div>
        <div>
          
        </div>
          </div>
          <button id='button-2' className="mt-24 mx-12 px-2 py-1 text-1xl rounded-md bg-blue-600 text-white" >Find a Car <span id='car-arrow'><i class="fa-solid fa-arrow-right"></i></span></button>
          <div id='discount'>
            <div id='discount-banner' className="flex justify-center font-serif w-[max-content] ml-[90%] font-semibold text-white text-[1.3rem]">Get extra 10% discount</div>
            <div id='discount-banner-2' className="flex justify-center font-light ml-[90%] text-white">On first 3 rides</div>
           </div>

        <div id='banner-1' className="w-[50%] h-[72px] mt-[5%] bg-sky-500 motion-box"> 
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
  )
}

export default Header
