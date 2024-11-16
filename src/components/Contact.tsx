import React from 'react'

function Contact() {
  return (
    <div id='Contact' className='sm:mx-20 mx-10 my-32'>
    <h1 className="text-center sm:text-6xl text-5xl my-14">Contact</h1>
    <div className='flex lg:gap-32 gap-10 justify-center sm:items-start items-center md:flex-row flex-col'>
        <div className="flex flex-col gap-6">
      <input className='md:w-[350px] sm:w-[500px] w-[340px]  bg-[#323131] px-3 py-1 rounded-sm text-white outline-none focus:outline-white' type="text" placeholder='Your Name' />
      <input className='md:w-[350px]  sm:w-[500px] w-[340px] bg-[#323131] px-3 py-1 rounded-sm text-white outline-none focus:outline-white' type="email" placeholder='Your Email' />
      <textarea className='md:w-[350px]  sm:w-[500px] w-[340px] bg-[#323131] px-3 py-1 rounded-sm text-white outline-none focus:outline-white' rows={4} placeholder='Write Your Message'></textarea>

      <button className='bg-white hover:bg-slate-300 transition-all text-black rounded-md py-2 w-32'>Send Message</button>
    </div>

    <div className='flex flex-col gap-8'>
    <textarea className='md:w-[350px]  sm:w-[500px] w-[340px] bg-[#323131] px-3 py-1 rounded-sm text-white outline-none focus:outline-white' rows={8} placeholder='Leave a Review'></textarea>
    <button className='bg-white hover:bg-slate-300 transition-all text-black rounded-md py-2 w-32'>Submit Review</button>
    </div>
    </div>
    </div>
  )
}

export default Contact
