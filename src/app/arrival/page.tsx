import camera from '../../../public/images/camera.png'
import speaker from '../../../public/images/speaker.png'
import charger from '../../../public/images/carcharger.png'
import ProductsCard from '@/components/ProductsCard'


function NewArrival() {
  return (
    <div id="NewArrival" className=" overflow-x-hidden">
      <h1 className="text-center sm:text-6xl text-5xl mb-10">New Arrival</h1>
      <div className="flex flex-wrap justify-center gap-10 lg:mx-20 mx-10 my-10 ">
      
      <ProductsCard
      image={camera}
      title="Sony Camera"
      model="Nx300"
      price={800}
      />
<ProductsCard 
      image={speaker}
      title="Surround Speaker"
      model="Z506 5.1"
      price={300}
      />
<ProductsCard 
      image={charger}
      title="Car Charger"
      model="G megic"
      price={100}
      />

      </div>
    </div>
  )
}

export default NewArrival
