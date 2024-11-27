import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const Mobiles = () => {
    const firstfivemobiles=mobileData.slice(0,5)
  return (
    <>
        <h2>Mobiles</h2>
        <div className='productsection'>
        {
        firstfivemobiles.map((mobile)=>{
            return(
                
                <div className='box'>
                   <Link to='/mobiles' ><img src={mobile.image} alt="" /></Link>
                    
                    <p>{mobile.model}</p>
                
                 </div>
                
               
            )
            
        })
    }
    </div>
    </>

    
  )
}

export default Mobiles