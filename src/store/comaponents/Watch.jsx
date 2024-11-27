import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const Watch = () => {
    const firstfiveitems=watchData.slice(0,5)
  return (
    <>
    <h2>Watchs</h2>
    <div className='productsection'>
        
        {
            firstfiveitems.map((item)=>{
                return(
                    <div className='box'>
                        <Link to='watches'> <img src={item.image} alt="" /></Link>
                    
                    <p>{item.brand}</p>
                </div>
                )
               
            })
        }

    </div>
    </>
  )
}

export default Watch