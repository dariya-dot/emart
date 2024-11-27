import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../comaponents/Navbar'
import { Link } from 'react-router-dom'

const Furniturepage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
        {furnitureData.map((item)=>{
            return(
                <div>
                <div className="pageimage">
                  <Link to={`/furniture/${item.id}`}> <img src={item.image} alt="" /></Link>
                    
                </div>
                <div className="model">
                  {item.type}<br/>{item.brand}
                </div>

            </div>
            )
           
        })}
    </div>
    </>
  )
}

export default Furniturepage