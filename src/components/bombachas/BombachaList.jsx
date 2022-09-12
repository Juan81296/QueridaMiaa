import React from 'react'
import bombachasStock from '../../stock/BombachasStock';
import Bombacha from '../bombachas/Bombacha'

const BombachaList = () => {
  const {products} = bombachasStock;

  return (
    <div className='bikinis-container'>
    <h2>Nuestras Bombachas "segunda piel"</h2>
    <h3>En Stock:</h3>
    <article>
      {products.map((product)=>(<Bombacha key={product.id} data={product} />))}
    </article>
  </div>
  )
}

export default BombachaList