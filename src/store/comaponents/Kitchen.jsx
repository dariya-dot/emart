import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const Kitchen = () => {
    const firstfiveitems=kitchenData.slice(0,5)
  return (
    <>
    <h2>Kitchen</h2>
    <div className='productsection'>
        
        {
            firstfiveitems.map((item)=>{
                return(
                    <div className='box'>
                        <Link to='/kitchen'><img src={item.image} alt="" /></Link>
                    
                    <p>{item.type}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  )
}

export default Kitchen