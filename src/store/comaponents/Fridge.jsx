import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'

export const Fridge = () => {
    const firstfivefridge=fridgeData.slice(0,5)
  return (
    <>
    <h2>Fridge</h2>
    <div className='productsection'>
        
        {
            firstfivefridge.map((item)=>{
                return(
                    <div className='box'>
                    <Link to='/fridges'><img src={item.image} alt="" /></Link>
                    
                    <p>{item.model}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  )
}
