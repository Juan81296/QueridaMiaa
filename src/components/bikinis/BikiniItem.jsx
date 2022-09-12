import React from 'react'
import '../../styles/cart.css'
import '../../styles/IndexStyle.css'
const BikiniItem = ({data}) => {
    const {name,price,imgURL} = data
  return (
    <div style={{justifySelf:'center',border:'1px solid #eeeee7',borderRadius:'10px',height:'auto', padding:'20px',width:'fit-content',margin:'20px'}}>
      <div className='bikini-imagenes'>
      <img src={imgURL} alt={name} />
      </div>
      <h4 className="name"> {name} </h4>
      <h5 className="price"> ${price}.00 </h5>
    </div>
  )
}

export default BikiniItem