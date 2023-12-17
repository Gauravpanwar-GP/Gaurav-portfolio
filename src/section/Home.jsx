import React from 'react';
import profile from '../assets/images/portfolio-img.png';

const Home = () => {
  return (
    <div className='h-[calc(100vh-150px)] md:h-[calc(100vh-80px)] md:items-center flex justify-end py-10 px-4 md:p-20 profile-bg'>
        <div className='md:w-[60%]'>
            <p className='text-[1.2em] md:text-[2em]'>I'M</p>
            <p className='font-bold text-[3em] text-[#f9a620]'>Gaurav Panwar</p>
            <p className='text-[1em] md:text-[1.5em]'>I am a FrontEnd Web Developer building Interactive User Experience (UX) and Interface (UI). More focused on creating attractive , clean-cut Interfaces.</p>
            <button className='border-2 border-[#f9a620] text-[#f9a620] rounded-[10px] py-2 px-4 font-semibold mt-6'>CONTACT ME</button>
        </div>
    </div>
  )
}

export default Home