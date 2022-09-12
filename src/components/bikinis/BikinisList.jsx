import BikiniItem from './BikiniItem';
import bikinisStock from "../../stock/BikinisStock";
import '../../styles/cart.css'

const BikinisList = () => {
    const {products} = bikinisStock;
  return (
    <div className='bikinis-container'>
      <h2>Nuestras Bikinis</h2>
      <h3>En Stock:</h3>
      <article>
        {products.map((product)=>(<BikiniItem key={product.id} data={product} />))}
      </article>
    </div>
  )
}
export default BikinisList