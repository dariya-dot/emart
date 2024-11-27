import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'
const Fridgepage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {fridgeData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                  <Link to={`/fridges/${item.id}`} ><img src={item.image} alt="" /></Link>
                    
                </div>
                <div className="model">
                  {item.brand}<br/>{item.model}
                </div>

            </div>
            )
           
        })}
    </div>
    </>
  )
}

export default Fridgepage