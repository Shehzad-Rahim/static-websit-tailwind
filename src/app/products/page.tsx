
import ProductsCard from '@/components/ProductsCard'
import bluewatch from '../../../public/images/bluewatch.png'
import gamingkeyboard from '../../../public/images/gamingkeyboard.png'
import ipad7 from '../../../public/images/ipad7.png'
import keyboardset from '../../../public/images/keyboardset.png'
import laptop from '../../../public/images/laptop.png'
import pinkbuds from '../../../public/images/pinkbuds.png'
function Products() {
  return (
  <div className="my-10">
    <h1 className="sm:text-6xl text-5xl text-center my-10">Products</h1>
    <div className="flex flex-wrap justify-center gap-10 lg:mx-20 mx-10 my-10">

      <ProductsCard 
      image={bluewatch}
      title="Watch"
      model="Q1R"
      price={100}
      />

    <ProductsCard 
      image={gamingkeyboard}
      title="Gaming Keyboard"
      model="d27"
      price={90}
      />

    <ProductsCard 
      image={ipad7}
      title="Ipad"
      model="7th Genration"
      price={400}
      />

    <ProductsCard 
      image={keyboardset}
      title="Gaming Keyboad + Mouse"
      model="A313"
      price={50}
      />

<ProductsCard 
      image={laptop}
      title="Hp"
      model="g562"
      price={500}
      />

    <ProductsCard 
      image={pinkbuds}
      title="Air buds"
      model="A21"
      price={90}
      />
    </div>
    </div>
  )
}

export default Products
