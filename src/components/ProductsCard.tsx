import { StaticImageData } from "next/image"
import  Image  from "next/image"

interface Products{
    image:string | StaticImageData
    title: string
    model : string | number
    price : number
}
function ProductsCard({image , title , model , price} : Products) {
  return (
    <div className=" shadow-[0px_0px_5px_5px_white] rounded-lg overflow-hidden">
    <div className="flex justify-center items-center xl:w-[300px] xl:h-[250px] lg:w-[250px] lg:h-[200px] md:w-[300px] md:h-[250px] sm:w-[250px] sm:h-[200px] w-[300px] h-[250px]  bg-white hover:bg-gray-300 hover:scale-105 transition-all cursor-pointer">
     <Image className="w-[80%] h-[80%]" src={image} alt="product" />
    </div>
    <div className="text-lg p-4">
        <h1>Title: {title}</h1>
        <p>Model: {model}</p>
        <p>Price: {price}$</p>
    </div>
    </div>
  )
}

export default ProductsCard
