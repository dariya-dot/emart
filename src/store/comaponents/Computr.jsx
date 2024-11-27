import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'

export const Computr = () => {
    const firstfivecomputers=computerData.slice(0,5)
  return (
    <>
    <h2>Computers</h2>
    <div className='productsection'>
        
        {
            firstfivecomputers.map((item)=>{
                return(
                    <div className='box'>
                        <Link to='/computers' ><img src={item.image} alt="" /></Link>
                    
                    <p>{item.company}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  
  )
}
