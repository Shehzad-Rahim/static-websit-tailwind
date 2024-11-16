import Image from 'next/image'
import headphone from '../../public/images/headphone.png'
import watch from '../../public/images/watch.png'

function Hero() {
  return (
    <div className="flex lg:flex-row lg:gap-0 gap-20 flex-col justify-between items-center xl:mx-32 sm:mx-20 mx-10 my-20">
        <div className=" flex flex-col gap-2">
            <h1 className="sm:text-5xl text-4xl">The Simple Way</h1>
            <p className="text-2xl">Your Digital Home</p>
            <p className="w-[90%]">The Simple Way is a Web app where you can explore your Digital needs and trendy tech gadgets.</p>
        </div>

        <div className="flex sm:flex-row flex-col-reverse ">
          <div className="relative flex justify-center items-center  sm:rotate-12 rotate-[20deg] sm:left-10 left-5 sm:top-10 -top-12 z-10 shadow-[0px_0px_10px_white] bg-white rounded-md sm:w-[270px] sm:h-[280px] w-[250px] h-[250px] ">
          <Image className=' w-[90%] h-[90%]' src={watch} alt='headphones'></Image>
          </div>

          <div id='headphones' className="flex justify-center items-center  sm:-rotate-12 -rotate-[20deg] shadow-[0px_0px_10px_white] bg-white rounded-md sm:w-[310px] sm:h-[310px] w-[270px] h-[240px] ">
          <Image className='w-[90%] h-[90%]' src={headphone} alt='headphones'></Image>
          </div>
        </div>

    </div>
  )
}

export default Hero
