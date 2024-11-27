import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const Men = () => {
    const firstfiveitems=menData.slice(0,5)
  return (
    <>
    <h2>Men Fashion</h2>
    <div className='productsection'>
        
        {
            firstfiveitems.map((item)=>{
                return(
                    <div className='box'>
                        <Link to='/mens'><img src={item.image} alt="" /></Link>
                    
                    <p>{item.type}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  )
}

export default Men