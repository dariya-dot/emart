import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = () => {
    const firstfiveitems =acData.slice(0,5)
  return (
    <>
    <h2>Air conditioner</h2>
    <div className='productsection'>
        
        {
            firstfiveitems.map((item)=>{
                return(
                    <div className='box'>
                        <Link to='/ac'><img src={item.image} alt="" /></Link>
                    
                    <p>{item.company}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  )
}

export default Ac