import React from 'react'
import Logo from "../img/Logo.png";
import DownArrow from "../img/down-arrow.svg";  

const Header = () => {
  return (
    <div>
      <header className='z-10 absolute right-0 left-0 pt-[100px]'> 
        <div className='xl:container container-[100%] mx-auto px-4'>

          <div className='flex items-center	'>
            <div className='px-2'>
              <img src={Logo}></img>
            </div>

            <div className='px-2 flex-1 text-center'>
              <ul>
                <li className='px-[20px] inline-block'>
                  <a href='#' className='flex gap-2	 text-white	items-center	text-[24px] font-semibold	'>Product 
                    <img src={DownArrow} ></img>
                  </a>
                </li> 
                <li className='px-[20px] inline-block'>
                  <a href='#' className='flex gap-2	 text-white	items-center	text-[24px] font-semibold	'>Solution 
                    <img src={DownArrow}></img>
                  </a>
                </li>
                <li className='px-[20px] inline-block'>
                  <a href='#' className='flex gap-2	 text-white	items-center	text-[24px] font-semibold	'>Enterprise </a>
                </li>
                <li className='px-[20px] inline-block'>
                  <a href='#' className='flex gap-2	 text-white	items-center	text-[24px] font-semibold	'>Pricing </a>
                </li>
              </ul>
            </div>

            <div className='px-2 w-1/4 text-left flex items-center justify-end	'>
               <button className=' font-medium rounded-lg text-sm px-5
                xl:px-7 py-3  xl:py-4 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50  text-2xl	 font-semibold	text-[#1F1F1F]"'>Login</button>
               <button type="button" className="bg-[#FFCA1D] hover:bg-[#000]/90 focus:ring-4 focus:ring-[#fff]/50  focus:text-white focus:outline-none font-medium rounded-lg text-sm  px-5
                xl:px-7 py-3  xl:py-4 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50  text-2xl	 font-semibold	text-[#1F1F1F]">Sign Up</button>

            </div>
 
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header