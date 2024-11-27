import React from 'react'
import { kitchenData } from '../store/data/kitchen'
import { useParams } from 'react-router-dom'
import Navbar from '../store/comaponents/Navbar'

const Kitchensingle = () => {
    const {id}=useParams()
    const singleitem=kitchenData.find((item)=>item.id===id)
  return (
    <>
    <Navbar/>
    <div className='singleitem'>
        <div className="singleimage">
            <img src={singleitem.image} alt="" />
        </div>
        <div className='itemdetails'>
            <div><h3>Brand:{singleitem.brand}</h3></div>
            <div><h4>Model:{singleitem.model}</h4></div>
            <div><h4>Dollers:{singleitem.price}</h4></div>
            <div><h4>Category:{singleitem.category}</h4></div>
            <div><h5>Product discription:{singleitem.description}</h5></div>
            <button>Add To Cart</button>
        </div>
    </div>
    </>
  )
}

export default Kitchensingle