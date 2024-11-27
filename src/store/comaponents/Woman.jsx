import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'

const Woman = () => {
    const firstfiveitems=womanData.slice(0,5)
  return (
    <>
    <h2>Woman Fashion</h2>
    <div className='productsection'>
        
        {
            firstfiveitems.map((item)=>{
                return(
                    <div className='box'>
                        <Link to='/womans'> <img src={item.image} alt="" /></Link>
                   
                    <p>{item.type}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  )
}

export default Woman