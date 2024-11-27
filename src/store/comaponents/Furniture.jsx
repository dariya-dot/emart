import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
const Furniture = () => {
    const firstfivefurniture=furnitureData.slice(0,5)
  return (
    <>
    <h2>Furniture</h2>
    <div className='productsection'>
        
        {
            firstfivefurniture.map((item)=>{
                return(
                    <div className='box'>
                        <Link to='/furniture'><img src={item.image} alt="" /></Link>
                    
                    <p>{item.type}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  )
}

export default Furniture